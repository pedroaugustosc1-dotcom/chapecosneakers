import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Chapeco Sneakers — Ande diferente',
  description: 'Uma curadoria de sneakers para quem transforma o cotidiano em identidade.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>
}
