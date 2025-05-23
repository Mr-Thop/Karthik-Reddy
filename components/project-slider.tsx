"use client"

import type React from "react"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react"
import Link from "next/link"

interface Project {
  title: string
  description: string
  tech: string[]
  link: string
  github: string
  image: string
}

const projects: Project[] = [
  {
    title: "FarmIQ – AgriTech Platform",
    description:
      "Smart agriculture support for smallholder farmers. Full-stack implementation with AI-powered features.",
    tech: ["Flask", "React", "PostgreSQL", "LangChain", "TensorFlow"],
    link: "#",
    github: "#",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    title: "DealPool – Group-Based Offer Pooling",
    description: "Startup concept to pool shopping deals. Includes website and mobile app.",
    tech: ["React", "Node.js", "MongoDB"],
    link: "#",
    github: "#",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    title: "LearnGenie – AI EdTech Assistant",
    description: "Personalized learning recommendations using NLP & OpenAI API.",
    tech: ["Python", "OpenAI API", "Flask", "NLP"],
    link: "#",
    github: "#",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    title: "Sportans – Sports Analytics Platform",
    description: "ML-based performance insights and visualizations.",
    tech: ["Python", "TensorFlow", "Data Visualization"],
    link: "#",
    github: "#",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    title: "AI Resume Filtering System",
    description: "LLM/NLP-based smart resume screening system.",
    tech: ["Python", "NLP", "LangChain"],
    link: "#",
    github: "#",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    title: "Tourism Planner – Generative AI",
    description: "Personalized travel plans using OpenAI.",
    tech: ["Python", "OpenAI API", "Streamlit"],
    link: "#",
    github: "#",
    image: "/placeholder.svg?height=300&width=500",
  },
]

export default function ProjectSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)

  const handlePrev = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : projects.length - 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const handleNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex < projects.length - 1 ? prevIndex + 1 : 0))
    setTimeout(() => setIsAnimating(false), 500)
  }

  // Touch event handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    if (isAnimating) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      handleNext()
    }

    if (isRightSwipe) {
      handlePrev()
    }

    setTouchStart(null)
    setTouchEnd(null)
  }

  return (
    <div className="relative w-full">
      {/* Navigation Arrows */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
        <button
          onClick={handlePrev}
          className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border border-cyan-400 text-cyan-600 hover:bg-cyan-50 hover:text-cyan-700 flex items-center justify-center shadow-md"
          aria-label="Previous project"
          disabled={isAnimating}
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      </div>

      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10">
        <button
          onClick={handleNext}
          className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border border-cyan-400 text-cyan-600 hover:bg-cyan-50 hover:text-cyan-700 flex items-center justify-center shadow-md"
          aria-label="Next project"
          disabled={isAnimating}
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Project Slider */}
      <div
        className="relative overflow-hidden"
        style={{ height: "500px" }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="absolute inset-0 flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {projects.map((project, index) => (
            <div key={index} className="min-w-full px-4 flex-shrink-0">
              <div className="card h-full flex flex-col overflow-hidden">
                <div className="h-48 md:h-56 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-cyan-100 text-cyan-700">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="px-6 pb-6 flex justify-between items-center">
                  <Link href={project.github} className="text-gray-600 hover:text-cyan-600 transition-colors">
                    <Github className="h-5 w-5" />
                  </Link>
                  <Link
                    href={project.link}
                    className="btn btn-outline py-2 px-4 flex items-center text-cyan-600 hover:text-cyan-700 font-medium"
                  >
                    View Project
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-8 space-x-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true)
                setCurrentIndex(index)
                setTimeout(() => setIsAnimating(false), 500)
              }
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-cyan-500 w-6" : "bg-gray-300"
            }`}
            aria-label={`Go to project ${index + 1}`}
            disabled={isAnimating}
          />
        ))}
      </div>
    </div>
  )
}
