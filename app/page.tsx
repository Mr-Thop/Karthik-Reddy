"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Achievements from "@/components/achievements"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import LoadingScreen from "@/components/loading-screen"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  // Loading screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  // Scroll animation effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTriggers = document.querySelectorAll(".scroll-trigger")

      scrollTriggers.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top
        const windowHeight = window.innerHeight

        if (elementPosition < windowHeight * 0.85) {
          element.classList.add("visible")
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    // Trigger once on load
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <main className="min-h-screen">
        <Header />
        <Hero />
        <About />
        <Projects />
        <Achievements />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
