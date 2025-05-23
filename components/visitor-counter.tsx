"use client"

import { useEffect, useState } from "react"
import { Users } from "lucide-react"

export default function VisitorCounter() {
  const [visitorCount, setVisitorCount] = useState(0)

  useEffect(() => {
    // Simulate fetching visitor count from storage
    const storedCount = localStorage.getItem("visitorCount")
    const initialCount = storedCount ? Number.parseInt(storedCount, 10) : 0

    // Increment count for this visit
    const newCount = initialCount + 1
    setVisitorCount(newCount)
    localStorage.setItem("visitorCount", newCount.toString())
  }, [])

  return (
    <div className="flex items-center justify-center text-gray-400">
      <Users className="h-4 w-4 mr-2" />
      <span className="text-sm">{visitorCount} visitors</span>
    </div>
  )
}
