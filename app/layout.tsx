import type { Metadata, Viewport } from 'next'
import { Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nexa Web Solutions - Premium Website Design & Development',
  description: 'Build landing pages, business websites, and online stores that bring customers and drive growth.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/n.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/n.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/n.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/n.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background scroll-smooth">
      <body className={`${montserrat.className} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
