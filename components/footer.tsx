import { Github, Linkedin, Mail } from "lucide-react"
import VisitorCounter from "./visitor-counter"
import GitHubStats from "./github-stats"

export default function Footer() {
  return (
    <footer className="py-12" style={{ backgroundColor: "#0A192F", color: "#F5F5F5" }}>
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Karne Karthikeshwar Reddy</h3>
            <p className="text-gray-400 mb-4">
              AI Innovator, Startup Founder, and B.Tech AI & ML student passionate about building intelligent solutions.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Mr-Thop"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/karthikeshwar-reddy-6011a8150"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:reddy.karthik0314@gmail.com"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">GitHub Stats</h3>
            <GitHubStats />
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Karne Karthikeshwar Reddy. All rights reserved.
          </p>
          <VisitorCounter />
        </div>
      </div>
    </footer>
  )
}
