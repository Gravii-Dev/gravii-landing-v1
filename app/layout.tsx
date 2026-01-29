import type { Metadata } from 'next'
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
      </head>
      <body className="bg-black font-gambarino text-white">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
