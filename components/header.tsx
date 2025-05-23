"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled
      setIsScrolled(window.scrollY > 20)

      // Calculate scroll progress for name transition
      // We want the transition to happen within the first 20% of the page scroll
      const scrollMax = window.innerHeight * 0.5
      const progress = Math.min(1, window.scrollY / scrollMax)
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-3 bg-white/80 backdrop-blur-md shadow-sm" : "py-5 bg-transparent"
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link href="/" className="font-bold text-cyan-400 transition-all duration-500 overflow-hidden min-w-0">
          <div className="flex items-center relative">
            {/* KKR - fades out */}
            <span
              className="inline-block transition-all duration-500 ease-in-out absolute whitespace-nowrap"
              style={{
                opacity: Math.max(0, 1 - scrollProgress * 1.5),
                transform: `translateX(${scrollProgress * -20}px) scale(${1 - scrollProgress * 0.1})`,
                fontSize: scrollProgress > 0.5 ? "0px" : "1.25rem",
              }}
            >
              KKR
            </span>

            {/* Full name - fades in */}
            <span
              className="inline-block transition-all duration-500 ease-in-out whitespace-nowrap"
              style={{
                opacity: Math.min(1, scrollProgress * 1.5),
                transform: `translateX(${(1 - scrollProgress) * 20}px) scale(${0.8 + scrollProgress * 0.2})`,
                fontSize: scrollProgress < 0.3 ? "0px" : `${0.8 + scrollProgress * 0.4}rem`,
                minWidth: scrollProgress > 0.3 ? "auto" : "0",
                paddingLeft: scrollProgress > 0.3 ? "0" : "0",
              }}
            >
              Karthikeshwar Reddy
            </span>
          </div>
        </Link>
        <Link
          href="/resume.pdf"
          download
          className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded hover:bg-cyan-400/10 transition-colors text-sm flex-shrink-0"
        >
          Resume
        </Link>
      </div>
    </header>
  )
}
