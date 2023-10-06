import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], weight: '300' })

export const metadata: Metadata = {
  title: 'My Next.js tutorial',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <div style={{height: "150px", width: "100%", backgroundColor: "white"}}>
          {children}
        </div>
      </body>
    </html>
  )
}
