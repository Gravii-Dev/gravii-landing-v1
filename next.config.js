/** @type {import('next').NextConfig} */
const path = require('node:path')

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@reown/appkit', '@reown/appkit-adapter-wagmi'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
        // search omitted = allow any query params (?q=80&w=1000&auto=format&fit=crop)
      },
    ],
    qualities: [75, 85],
  },
  turbopack: {
    // Use absolute path so parent /Users/kxwxn (pnpm-lock.yaml) is not used as root
    root: path.resolve(__dirname),
    resolveAlias: {
      crypto: 'crypto-browserify',
      stream: 'stream-browserify',
      buffer: 'buffer',
      util: 'util',
      assert: 'assert',
      http: 'stream-http',
      https: 'https-browserify',
      os: 'os-browserify/browser',
      url: 'url',
    },
  },
  webpack: (config, { isServer }) => {
    // Resolve all modules from this project directory, not parent Gravii or workspace root
    config.context = path.resolve(__dirname)
    config.resolve.modules = [
      path.resolve(__dirname, 'node_modules'),
      'node_modules',
    ]
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify'),
        buffer: require.resolve('buffer'),
        util: false,
        assert: false,
        http: false,
        https: false,
        os: false,
        url: false,
      }
    }
    return config
  },
}

module.exports = nextConfig
