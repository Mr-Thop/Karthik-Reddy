"use client"

import type React from "react"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import Link from "next/link"

interface Project {
  title: string
  description: string
  tech: string[]
  link: string
}

const projects: Project[] = [
  {
    title: "FarmIQ – AgriTech Platform",
    description:
      "An end-to-end platform empowering smallholder farmers with AI-powered analysis.",
    tech: ["Flask", "React", "PostgreSQL", "LangChain", "TensorFlow", "MySQL"],
    link: "#", 
  },
  {
    title: "DealPool – Group-Based Offer Pooling",
    description:
      "Innovative startup concept that enables users to pool shopping deals with people for better bulk discounts.",
    tech: ["React", "Node.js", "MongoDB", "Express", "TailwindCSS"],
    link: "#",
  },
  {
    title: "LearnGenie – AI EdTech Assistant",
    description:
      "A personalized learning assistant that uses NLP and OpenAI to recommend study materials.",
    tech: ["Python", "OpenAI API", "Flask", "NLP", "LangChain"],
    link: "#",
  },
  {
    title: "Sportans – Sports Analytics Platform",
    description:
      "An ML-driven platform offering data analytics and visualizations for insights.",
    tech: ["Python", "TensorFlow", "Matplotlib", "Pandas", "Scikit-learn"],
    link: "#",
  },
  {
    title: "AI Resume Filtering System",
    description:
      "A smart assistant using LLMs to analyze match profiles to job descriptions, and rank candidates based on fit.",
    tech: ["Python", "NLP", "LangChain", "Flask", "OpenAI API"],
    link: "#",
  },
  {
    title: "Tourism Planner – Generative AI",
    description:
      "A generative AI tool that creates personalized travel itineraries based on user preferences, destinations, and budget.",
    tech: ["Python", "OpenAI API", "Streamlit", "Pandas"],
    link: "#",
  },
];


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
        style={{ height: "400px" }}
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
              <div className="card h-full flex flex-col justify-between bg-white/80 backdrop-blur-sm border border-gray-100 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900 group relative inline-block">
                    <span className="hover:text-cyan-600 transition-colors duration-300 group-hover:text-cyan-600">
                      {project.title}
                    </span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-cyan-50 text-cyan-700 border border-cyan-100"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex justify-end">
                  <a
                    href={project.link}
                    className="btn btn-outline py-2 px-4 flex items-center text-cyan-600 hover:text-cyan-700 font-medium"
                  >
                    View Project
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
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
