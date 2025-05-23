import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import SectionIndicator from "@/components/section-indicator"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Karne Karthikeshwar Reddy - AI Innovator & Startup Founder",
  description: "Portfolio of Karne Karthikeshwar Reddy, B.Tech AI & ML student, AI Developer, and Startup Founder.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <SectionIndicator />
        {children}
      </body>
    </html>
  )
}
