import './globals.css'
import type { Metadata } from 'next'
import localFont from '@next/font/local'

const myLocalFont = localFont({
  src: './myfont/SFProText-Bold.woff2'
})

export const metadata: Metadata = {
  title: 'Coflow',
  description: 'Community for youtubers and followers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${myLocalFont.className} font-sans`}>{children}</body>
    </html>
  )
}
