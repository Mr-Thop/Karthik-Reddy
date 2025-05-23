"use client"

import { useEffect, useState } from "react"

interface LoadingScreenProps {
  isLoading: boolean
}

export default function LoadingScreen({ isLoading }: LoadingScreenProps) {
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    if (!isLoading) {
      // Add a small delay before completely removing the loader from DOM
      const timer = setTimeout(() => {
        setShowLoader(false)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [isLoading])

  if (!showLoader) return null

  return (
    <div className={`loading-screen ${!isLoading ? "loaded" : ""}`}>
      <div className="loading-logo">KKR</div>
    </div>
  )
}
