import type { Metadata } from 'next'

import '../styles/globals.scss'
import '../styles/font/font.scss'

export const metadata: Metadata = {
  title: '',
  description: ''
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}
