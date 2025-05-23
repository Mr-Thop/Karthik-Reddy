"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import ThemeToggle from "./theme-toggle"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 dark:bg-gray-950/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-blue-700 dark:text-blue-400">
              KKR
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button
              asChild
              className="bg-blue-700 hover:bg-blue-800 text-white dark:bg-blue-600 dark:hover:bg-blue-700"
            >
              <a href="/Karthik.pdf" download>
                Resume
              </a>
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex md:hidden items-center space-x-4">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 bg-white dark:bg-gray-950">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-400 transition-colors px-4 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="px-4 pt-2">
                <Button
                  asChild
                  className="w-full bg-blue-700 hover:bg-blue-800 text-white dark:bg-blue-600 dark:hover:bg-blue-700"
                >
                  <a href="/resume.pdf" download>
                    Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
