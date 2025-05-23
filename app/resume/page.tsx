import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download, Briefcase, GraduationCap, Award, Code } from "lucide-react"

export default function ResumePage() {
  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8 flex justify-between items-center">
          <Button variant="ghost" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <Button asChild className="bg-blue-700 hover:bg-blue-800 text-white dark:bg-blue-600 dark:hover:bg-blue-700">
            <a href="/Karthik.pdf" download>
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </a>
          </Button>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 border border-gray-100 dark:border-gray-700">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Karne Karthikeshwar Reddy</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              AI Innovator | Startup Founder | B.Tech AI & ML Student
            </p>
            <div className="flex justify-center space-x-4 mt-4">
              <p className="text-gray-600 dark:text-gray-400">
                <a href="mailto:reddy.karthik0314@gmail.com" className="hover:text-blue-700 dark:hover:text-blue-400">
                  reddy.karthik0314@gmail.com
                </a>
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                <a href="tel:+919966408139" className="hover:text-blue-700 dark:hover:text-blue-400">
                  +91-9966408139
                </a>
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <section>
              <div className="flex items-center mb-4">
                <GraduationCap className="h-6 w-6 text-blue-700 dark:text-blue-400 mr-2" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h2>
              </div>
              <div className="border-l-2 border-blue-700 dark:border-blue-400 pl-4 ml-3 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Symbiosis Institute of Technology, Pune
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    B.Tech in Artificial Intelligence & Machine Learning (2023–2027)
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">GPA: 8.53</p>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mt-2">
                    <li>Third Ranker in Semester 2</li>
                    <li>Cummins Scholarship Awardee – AY 2023-2024</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    DDMS P Obul Reddy Public School, Hyderabad
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">Higher Secondary (2021–2023)</p>
                  <p className="text-gray-600 dark:text-gray-400">Percentage: 95.8%</p>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center mb-4">
                <Code className="h-6 w-6 text-blue-700 dark:text-blue-400 mr-2" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Skills</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Languages</h3>
                  <p className="text-gray-600 dark:text-gray-400">Python, C, Java, HTML, CSS, JavaScript, SQL</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Frameworks & Tools</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Flask, TensorFlow, Scikit-learn, LangChain, OpenAI API, Streamlit, NLTK, SpaCy, PowerBI
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Databases</h3>
                  <p className="text-gray-600 dark:text-gray-400">MySQL, PostgreSQL, SQLite</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Platforms</h3>
                  <p className="text-gray-600 dark:text-gray-400">Linux, GCP, Aiven, Windows</p>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center mb-4">
                <Briefcase className="h-6 w-6 text-blue-700 dark:text-blue-400 mr-2" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Projects</h2>
              </div>
              <div className="border-l-2 border-blue-700 dark:border-blue-400 pl-4 ml-3 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">FarmIQ – AgriTech Platform</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Smart agriculture support for smallholder farmers. Full-stack implementation with AI-powered
                    features.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 italic">
                    Tech: Flask, React, PostgreSQL, LangChain, TensorFlow
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    DealPool – Group-Based Offer Pooling
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Startup concept to pool shopping deals. Includes website and mobile app.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 italic">Tech: React, Node.js, MongoDB</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    LearnGenie – AI EdTech Assistant
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Personalized learning recommendations using NLP & OpenAI API.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 italic">Tech: Python, OpenAI API, Flask, NLP</p>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center mb-4">
                <Award className="h-6 w-6 text-blue-700 dark:text-blue-400 mr-2" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Achievements</h2>
              </div>
              <div className="border-l-2 border-blue-700 dark:border-blue-400 pl-4 ml-3 space-y-4">
                <p className="text-gray-600 dark:text-gray-400">
                  <span className="font-medium text-gray-900 dark:text-white">Grand Finalist</span> – New India Vibrant
                  Hackathon 2023
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  <span className="font-medium text-gray-900 dark:text-white">3rd Place</span> – Aarambh Season 2
                  (Business Pitch)
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  <span className="font-medium text-gray-900 dark:text-white">Finalist</span> – Entrepreneurial Meet @
                  BITS Pilani Goa
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  <span className="font-medium text-gray-900 dark:text-white">Finalist</span> – The Better Hackathon,
                  WeWorkSpaces
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
