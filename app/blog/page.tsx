import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, Clock, ArrowLeft } from "lucide-react"

const blogPosts = [
  {
    title: "The Future of AI in Agriculture",
    excerpt: "Exploring how artificial intelligence is transforming farming practices and improving crop yields.",
    date: "May 15, 2024",
    readTime: "5 min read",
    slug: "future-of-ai-in-agriculture",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Building Scalable ML Systems",
    excerpt:
      "Lessons learned from developing machine learning systems that can scale with growing data and user demands.",
    date: "April 28, 2024",
    readTime: "8 min read",
    slug: "building-scalable-ml-systems",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "My Journey as a Student Entrepreneur",
    excerpt:
      "Personal reflections on balancing academics with startup ambitions and the challenges faced along the way.",
    date: "April 10, 2024",
    readTime: "6 min read",
    slug: "journey-as-student-entrepreneur",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "The Rise of Generative AI",
    excerpt: "An overview of recent advancements in generative AI and their implications for various industries.",
    date: "March 22, 2024",
    readTime: "7 min read",
    slug: "rise-of-generative-ai",
    image: "/placeholder.svg?height=200&width=400",
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-6">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Blog & <span className="text-blue-700 dark:text-blue-400">Insights</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
            Thoughts, learnings, and perspectives on AI, entrepreneurship, and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 dark:text-white">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
                  >
                    {post.title}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center">
                  <CalendarDays className="h-4 w-4 mr-1" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{post.readTime}</span>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-6">More articles coming soon! Subscribe to get notified.</p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <Button className="bg-blue-700 hover:bg-blue-800 text-white dark:bg-blue-600 dark:hover:bg-blue-700">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
