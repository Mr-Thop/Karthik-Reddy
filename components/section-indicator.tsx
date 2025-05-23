"use client"

import { useState, useEffect } from "react"

interface Section {
  id: string
  title: string
}

export default function SectionIndicator() {
  const [activeSection, setActiveSection] = useState("")
  const [isVisible, setIsVisible] = useState(false)

  const sections: Section[] = [
    { id: "hero", title: "Home" },
    { id: "about", title: "About Me" },
    { id: "projects", title: "Projects" },
    { id: "achievements", title: "Achievements" },
    { id: "contact", title: "Contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      // Show indicator only when scrolled past hero section
      if (window.scrollY > window.innerHeight * 0.5) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }

      // Determine which section is currently in view
      const currentPosition = window.scrollY + window.innerHeight / 3

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id)
        if (section && section.offsetTop <= currentPosition) {
          setActiveSection(sections[i].id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [sections])

  // Find the index of the active section
  const activeSectionIndex = sections.findIndex((section) => section.id === activeSection)

  // Get previous and next sections
  const prevSection = activeSectionIndex > 0 ? sections[activeSectionIndex - 1] : null
  const nextSection = activeSectionIndex < sections.length - 1 ? sections[activeSectionIndex + 1] : null

  if (!isVisible) return null

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-30 pointer-events-none">
      <div className="flex flex-col items-end space-y-4">
        {prevSection && (
          <div className="text-gray-400 opacity-50 text-sm transition-all duration-300 transform translate-y-2">
            {prevSection.title}
          </div>
        )}

        <div className="text-cyan-400 font-medium flex items-center">
          <div className="w-8 h-[1px] bg-cyan-400 mr-2"></div>
          {sections.find((section) => section.id === activeSection)?.title}
        </div>

        {nextSection && (
          <div className="text-gray-400 opacity-50 text-sm transition-all duration-300 transform -translate-y-2">
            {nextSection.title}
          </div>
        )}
      </div>
    </div>
  )
}
