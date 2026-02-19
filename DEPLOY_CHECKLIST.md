# 호스팅 전 점검 체크리스트

**점검 일시:** 2025-02 기준

---

## ✅ 통과 항목

| 항목 | 결과 |
|------|------|
| **Lint** | `bun run lint` 통과 (Biome) |
| **빌드** | `bun run build` 성공 (Next.js 16.1.6) |
| **단위 테스트** | 36개 테스트 통과 (Vitest) |
| **TypeScript** | 빌드 시 타입 에러 없음 |
| **환경 변수 문서** | `.env.example`에 `NEXT_PUBLIC_REOWN_PROJECT_ID` 등 기재됨 |
| **시크릿** | `.env.local`이 `.gitignore`에 포함됨 |
| **내부 링크** | Next.js `Link` 사용 → `basePath` 자동 반영 |
| **외부 리소스** | Fontshare, Spline(HTTPS) 등 프로덕션 사용 가능 |

---

## ⚠️ 호스팅 전 확인 사항

### 1. basePath (`/landingpage`)

- `next.config.js`에 `basePath: '/landingpage'` 설정됨.
- **실제 접속 URL:** `https://your-domain.com/landingpage` (루트가 아님).
- Vercel/Netlify 등에서 서브경로로 배포하는 경우 그대로 사용하면 됨.
- **루트(`/`)에서 서빙하려면** 배포 플랫폼에서 Base Path를 비우거나, `next.config.js`에서 `basePath` 제거 후 재배포.

### 2. 환경 변수 (필수)

배포 플랫폼에 다음 변수 설정:

- **`NEXT_PUBLIC_REOWN_PROJECT_ID`**  
  - 없으면 Web3 지갑 연결이 동작하지 않음 (콘솔 경고만 나옴).  
  - [Reown Cloud](https://cloud.reown.com/)에서 프로젝트 ID 발급.

선택:

- **`NEXT_PUBLIC_SPLINE_SCENE_URL`**  
  - Spline 씬 URL 오버라이드 시에만 사용. 현재는 HeroSection에 URL 하드코딩됨.

### 3. Web3 메타데이터 (선택)

- `src/config/web3.ts`에서 `metadata.url`은 런타임에 `window.location.origin` 사용 → 배포 도메인으로 자동 설정됨.
- `metadata.icons`는 `https://gravii.io/icon.png` 고정. 도메인/경로가 다르면 해당 파일을 올리고 URL 수정 권장.

### 4. E2E 테스트 (Playwright)

- 로컬 E2E 시 앱이 `basePath` 때문에 `/landingpage`에서 서빙됨.
- **로컬 E2E 실행 시** `playwright.config.ts`의 `baseURL`을 `http://localhost:3000/landingpage`로 두고 실행하는 것이 안전함 (필요 시 수정).

---

## 📋 배포 플랫폼별 참고

- **Vercel**  
  - Project Settings → General → Root Directory 확인.  
  - Environment Variables에 `NEXT_PUBLIC_REOWN_PROJECT_ID` 추가.
- **Netlify**  
  - Build command: `bun run build` (또는 `npm run build`).  
  - Publish directory: `.next` 아님 → Next 런타임 사용 시 플랫폼 가이드 따르기.
- **기타**  
  - Node 18+ 권장. `bun run build` 후 `bun run start`로 실행.

---

## 요약

- **코드/빌드/테스트:** 문제 없음. 그대로 호스팅 가능.
- **배포 전 필수:** `NEXT_PUBLIC_REOWN_PROJECT_ID` 설정, 실제 접속 경로가 `/landingpage`인지 확인.
- **선택:** 루트(`/`)에서 서빙하려면 `basePath` 제거 또는 플랫폼 Base Path 설정 검토.
