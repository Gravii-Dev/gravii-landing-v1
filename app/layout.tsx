import type { Metadata } from 'next'
import { CrosshairCursor } from '@/src/components/ui/CrosshairCursor'
import { Link } from '@/src/components/ui/link'
import { Providers } from './providers'
import '../src/styles/globals.css'

export const metadata: Metadata = {
  title: 'Gravii - Behavioral Analytics for Web3',
  description: 'Behavioral Analytics for Web3',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=gambarino@400&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap"
        />
      </head>
      <body className="bg-black font-gambarino text-white">
        {/* Skip to main content link for keyboard users */}
        <Link
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-acid-400 focus:px-4 focus:py-2 focus:font-gambarino focus:text-black focus:shadow-lg"
        >
          Skip to main content
        </Link>
        <Providers>
          {children}
          <CrosshairCursor />
        </Providers>
      </body>
    </html>
  )
}
