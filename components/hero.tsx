import TypingEffect from "./typing-effect"
import Link from "next/link"

export default function Hero() {
  const roles = [
    "AI Innovator",
    "Startup Founder",
    "Machine Learning Developer",
    "Hackathon Finalist",
    "Tech Entrepreneur",
    "Research Enthusiast",
    "Full-Stack Engineer",
    "Product Thinker",
  ]

  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(100,255,218,0.1),transparent_50%)]"></div>
      </div>

      <div className="container-custom z-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Left side - Name and content positioned in center-left quadrant */}
          <div className="flex flex-col justify-center text-left md:pl-8 lg:pl-16">
            <div
              className="opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Karne Karthikeshwar Reddy
              </h1>
            </div>

            <div
              className="h-12 mb-8 opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
            >
              <TypingEffect
                phrases={roles}
                className="text-xl md:text-2xl font-medium"
                typingSpeed={80}
                deletingSpeed={40}
                delayBetweenPhrases={2000}
              />
            </div>

            <div
              className="opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}
            >
              <p className="text-lg text-gray-600 mb-8 max-w-xl leading-relaxed">
                Building intelligent solutions at the intersection of AI and real-world problems. B.Tech AI & ML student
                with a passion for entrepreneurship and innovation.
              </p>
            </div>

            <div
              className="flex flex-wrap gap-4 opacity-0 animate-fade-in-up"
              style={{ animationDelay: "1.2s", animationFillMode: "forwards" }}
            >
              <Link href="#contact" className="btn btn-primary">
                Get in Touch
              </Link>
              <Link href="#projects" className="btn btn-outline">
                View Projects
              </Link>
            </div>
          </div>

          {/* Right side - Photo */}
          <div className="hidden md:flex justify-center items-center">
            <div
              className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-cyan-400 shadow-xl opacity-0 animate-fade-in-left"
              style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
            >
              <img
                src=".\Karthik.jpg"
                alt="Karne Karthikeshwar Reddy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
