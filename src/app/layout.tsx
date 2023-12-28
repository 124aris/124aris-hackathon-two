import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import { Sora } from 'next/font/google'

const sora = Sora({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dine Market',
  description: 'Generated by 124aris',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={sora.className}>
        <div className='py-4 px-12'>
          <Header/>
          {children}
        </div>
      </body>
    </html>
  )
}
