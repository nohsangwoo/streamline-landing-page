import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import type { Metadata } from "next"
import MouseMoveEffect from "@/components/mouse-move-effect"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "아마네 소프트 - 최첨단 소프트웨어 솔루션",
  description: "아마네 소프트는 미래 기업을 위한 혁신적이고 고성능 소프트웨어 솔루션을 제공합니다.",
    generator: 'ludgi'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <MouseMoveEffect />
        {children}
      </body>
    </html>
  )
}



import './globals.css'