import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Oswald, Inter } from 'next/font/google'
import './globals.css'

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

const SITE_URL = 'https://www.bope.cl'
const TITLE = 'BOPE SECURITY — Asistencia y Monitoreo GPS'
const DESCRIPTION =
  'Monitoreo GPS, asistencia en ruta y expediente de evidencia para el transporte de carga en Chile. Plataforma en fase piloto.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/' },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'BOPE Security',
    locale: 'es_CL',
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: '/og-bope.png', width: 1200, height: 630, alt: 'BOPE Security — Asistencia y Monitoreo GPS' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/og-bope.png'],
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#09090b',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${oswald.variable} ${inter.variable}`}>
      <body className="bg-background font-mono antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
