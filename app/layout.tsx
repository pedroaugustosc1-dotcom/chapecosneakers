import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://chapecosneakers.com.br'),
  title: 'Chapeco Sneakers — Ande diferente',
  description: 'Uma curadoria de sneakers para quem transforma o cotidiano em identidade.',
  openGraph: {
    title: 'Chapeco Sneakers — Ande diferente',
    description: 'Uma curadoria de sneakers para quem transforma o cotidiano em identidade.',
    type: 'website',
    images: ['/opengraph-image'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chapeco Sneakers — Ande diferente',
    description: 'Uma curadoria de sneakers para quem transforma o cotidiano em identidade.',
    images: ['/opengraph-image'],
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>
}
