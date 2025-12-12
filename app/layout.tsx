import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'آموزش شنا و غواصی | رزرو آنلاین کلاس',
  description: 'بهترین مربیان شنا و غواصی • رزرو آنلاین • استخرهای مجهز • کلاس خصوصی و گروهی'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
