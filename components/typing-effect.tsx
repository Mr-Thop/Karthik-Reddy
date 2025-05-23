"use client"

import { useState, useEffect } from "react"

interface TypingEffectProps {
  phrases: string[]
  typingSpeed?: number
  deletingSpeed?: number
  delayBetweenPhrases?: number
  className?: string
}

export default function TypingEffect({
  phrases,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenPhrases = 1500,
  className = "",
}: TypingEffectProps) {
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isWaiting, setIsWaiting] = useState(false)

  useEffect(() => {
    if (phrases.length === 0) return

    let timeout: NodeJS.Timeout

    if (isWaiting) {
      timeout = setTimeout(() => {
        setIsWaiting(false)
        setIsDeleting(true)
      }, delayBetweenPhrases)
      return () => clearTimeout(timeout)
    }

    const currentPhrase = phrases[currentIndex]

    if (isDeleting) {
      if (currentText === "") {
        setIsDeleting(false)
        setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length)
      } else {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1))
        }, deletingSpeed)
      }
    } else {
      if (currentText === currentPhrase) {
        setIsWaiting(true)
      } else {
        timeout = setTimeout(() => {
          setCurrentText(currentPhrase.slice(0, currentText.length + 1))
        }, typingSpeed)
      }
    }

    return () => clearTimeout(timeout)
  }, [currentText, currentIndex, isDeleting, isWaiting, phrases, typingSpeed, deletingSpeed, delayBetweenPhrases])

  return (
    <div className={className}>
      <span className="text-cyan-400">{currentText}</span>
      <span className="typing-cursor"></span>
    </div>
  )
}
