'use client'

import { useEffect, useRef, useState } from 'react'

// 노이즈 강도 — 0 (안 보임) ~ 1 (불투명 노이즈). 여기서만 조정하면 됨
const NOISE_INTENSITY = 0.15

// ─────────────────────────────────────────────────────────────────────────────
// WGSL — vertex
// ─────────────────────────────────────────────────────────────────────────────
const VERTEX_SHADER = `
  struct VertexOutput {
    @builtin(position) clipPos: vec4<f32>,
  }

  @vertex
  fn vs_main(@builtin(vertex_index) i: u32) -> VertexOutput {
    let p = array<vec2<f32>, 3>(
      vec2<f32>(-1.0, -1.0),
      vec2<f32>( 3.0, -1.0),
      vec2<f32>(-1.0,  3.0),
    );
    return VertexOutput(vec4<f32>(p[i], 0.0, 1.0));
  }
`

// ─────────────────────────────────────────────────────────────────────────────
// WGSL — fragment: noise + scanline, premultiplied-alpha 출력
// ─────────────────────────────────────────────────────────────────────────────
const FRAGMENT_SHADER = `
  struct Uniforms {
    time:      f32,
    intensity: f32,
  }

  @group(0) @binding(0) var<uniform> uniforms: Uniforms;

  fn wang_hash(seed: u32) -> u32 {
    var k = seed;
    k = (k ^ 61u)  ^ (k >> 16u);
    k = k + (k << 3u);
    k = k ^ (k >> 4u);
    k = k * 0x27d4eb2du;
    k = k ^ (k >> 15u);
    return k;
  }

  @fragment
  fn fs_main(@builtin(position) frag: vec4<f32>) -> vec4<f32> {
    let px   = u32(frag.x);
    let py   = u32(frag.y);
    let tick = u32(uniforms.time * 60.0);

    // seed를 별도 변수로 분리 — '*'와 '^' 혼용 불가 규칙 회피
    let seed  = (px * 2654435761u) ^ (py * 340573321u) ^ tick;
    let noise = f32(wang_hash(seed)) / f32(0xFFFFFFFFu);

    // scanline: 짝수 행 ~12% dim
    let scanline = select(1.0, 0.88, (py % 2u) == 0u);
    let gray     = noise * scanline;

    // premultiplied alpha — CSS blend mode 불필요
    let a = uniforms.intensity;
    return vec4<f32>(gray * a, gray * a, gray * a, a);
  }
`

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────
interface GPUPipelineState {
  device: GPUDevice
  pipeline: GPURenderPipeline
  uniformBuffer: GPUBuffer
  bindGroup: GPUBindGroup
}

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────
export function TVNoiseOverlay() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const gpuRef = useRef<GPUPipelineState | null>(null)
  const rafRef = useRef<number>(0)
  const [fallback, setFallback] = useState(false)

  useEffect(() => {
    let cancelled = false

    const canvas = canvasRef.current
    if (!canvas) return

    // ── resize ───────────────────────────────────────────────────────────
    const resize = () => {
      const dpr = window.devicePixelRatio ?? 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
    }

    // ── WebGPU init ──────────────────────────────────────────────────────
    const init = async () => {
      if (!navigator?.gpu) {
        setFallback(true)
        return
      }

      try {
        const adapter = await navigator.gpu.requestAdapter()
        if (!adapter || cancelled) {
          setFallback(true)
          return
        }

        const device = await adapter.requestDevice()
        if (cancelled) {
          device.destroy()
          return
        }

        const ctx = canvas.getContext('webgpu')
        if (!ctx) {
          setFallback(true)
          return
        }

        const format = navigator.gpu.getPreferredCanvasFormat()

        // premultiplied alpha — browser가 직접 합성
        ctx.configure({
          device,
          format,
          alphaMode: 'premultiplied',
        })

        resize()
        window.addEventListener('resize', resize)

        // shader modules
        const vsModule = device.createShaderModule({
          code: VERTEX_SHADER,
        })
        const fsModule = device.createShaderModule({
          code: FRAGMENT_SHADER,
        })

        // async 파이프라인 생성 — 셰이더 컴파일 에러 시 reject → catch로 caught
        const uniformBuffer = device.createBuffer({
          size: 16,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
        })

        const bindGroupLayout = device.createBindGroupLayout({
          entries: [
            {
              binding: 0,
              visibility: GPUShaderStage.FRAGMENT,
              buffer: { type: 'uniform' },
            },
          ],
        })

        const bindGroup = device.createBindGroup({
          layout: bindGroupLayout,
          entries: [
            {
              binding: 0,
              resource: { buffer: uniformBuffer },
            },
          ],
        })

        const pipeline = await device.createRenderPipelineAsync({
          layout: device.createPipelineLayout({
            bindGroupLayouts: [bindGroupLayout],
          }),
          vertex: {
            module: vsModule,
            entryPoint: 'vs_main',
          },
          fragment: {
            module: fsModule,
            entryPoint: 'fs_main',
            targets: [{ format }],
          },
          primitive: { topology: 'triangle-list' },
        })

        if (cancelled) return

        gpuRef.current = {
          device,
          pipeline,
          uniformBuffer,
          bindGroup,
        }

        device.addEventListener('lost', () => setFallback(true))

        // ── render loop ────────────────────────────────────────────────
        const loop = () => {
          if (cancelled) return
          const state = gpuRef.current
          if (!state) return

          const {
            device: dev,
            pipeline: pipe,
            uniformBuffer: uBuf,
            bindGroup: bGroup,
          } = state

          // time + intensity
          dev.queue.writeBuffer(
            uBuf,
            0,
            new Float32Array([performance.now() / 1000, NOISE_INTENSITY])
          )

          const encoder = dev.createCommandEncoder()
          const pass = encoder.beginRenderPass({
            colorAttachments: [
              {
                view: ctx.getCurrentTexture().createView(),
                clearValue: { r: 0, g: 0, b: 0, a: 0 },
                loadOp: 'clear',
                storeOp: 'store',
              },
            ],
          })

          pass.setPipeline(pipe)
          pass.setBindGroup(0, bGroup)
          pass.draw(3)
          pass.end()
          dev.queue.submit([encoder.finish()])

          rafRef.current = requestAnimationFrame(loop)
        }

        loop()
      } catch (err) {
        console.error('[TVNoise] WebGPU failed:', err)
        setFallback(true)
      }
    }

    init()

    return () => {
      cancelled = true
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
      gpuRef.current?.device.destroy()
      gpuRef.current = null
    }
  }, [])

  // ── SVG fallback (no WebGPU) ─────────────────────────────────────────────
  if (fallback) {
    return (
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[9999]"
        style={{ opacity: NOISE_INTENSITY }}
      >
        <svg className="h-full w-full">
          <title>TV static noise (CSS fallback)</title>
          <defs>
            <filter id="tv-noise-fallback">
              <feTurbulence
                baseFrequency="0.9"
                numOctaves="4"
                stitchTiles="stitch"
                type="fractalNoise"
              />
              <feColorMatrix type="saturate" values="0" />
            </filter>
          </defs>
          <rect filter="url(#tv-noise-fallback)" height="100%" width="100%" />
        </svg>
      </div>
    )
  }

  // ── WebGPU canvas ─────────────────────────────────────────────────────────
  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      tabIndex={-1}
      className="pointer-events-none fixed inset-0 z-[9999] h-full w-full"
    />
  )
}
