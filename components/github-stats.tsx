"use client"

import { useEffect, useState } from "react"
import { Star, GitFork, Eye } from "lucide-react"

interface GitHubStats {
  stars: number
  forks: number
  watchers: number
}

export default function GitHubStats({ username = "Mr-Thop", repo = "FarmIQ" }: { username?: string; repo?: string }) {
  const [stats, setStats] = useState<GitHubStats>({
    stars: 0,
    forks: 0,
    watchers: 0,
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        // For demo purposes, we'll use mock data
        // In a real app, you would fetch from GitHub API:
        // const response = await fetch(`https://api.github.com/repos/${username}/${repo}`);
        // const data = await response.json();

        // Simulating API response with mock data
        setTimeout(() => {
          setStats({
            stars: 7,
            forks: 28,
            watchers: 5,
          })
          setLoading(false)
        }, 1000)
      } catch (err) {
        setError("Failed to fetch GitHub stats")
        setLoading(false)
      }
    }

    fetchGitHubStats()
  }, [username, repo])

  if (error) {
    return <div className="text-red-400 text-center">{error}</div>
  }

  return (
    <div className="bg-gray-800/50 rounded-lg p-4">
      {loading ? (
        <div className="flex justify-center py-2">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-cyan-400"></div>
        </div>
      ) : (
        <div className="flex justify-between">
          <div className="flex items-center">
            <Star className="h-5 w-5 text-yellow-500 mr-1" />
            <span className="text-gray-300">{stats.stars}</span>
          </div>
          <div className="flex items-center">
            <GitFork className="h-5 w-5 text-cyan-400 mr-1" />
            <span className="text-gray-300">{stats.forks}</span>
          </div>
          <div className="flex items-center">
            <Eye className="h-5 w-5 text-green-500 mr-1" />
            <span className="text-gray-300">{stats.watchers}</span>
          </div>
        </div>
      )}
    </div>
  )
}
