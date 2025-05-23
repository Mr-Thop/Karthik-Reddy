import { Briefcase, GraduationCap, Lightbulb, Trophy } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="section section-dark">
      <div className="container-custom">
        <h2 className="section-heading">
          About <span className="text-cyan-400">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card scroll-trigger">
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-cyan-600" />
                </div>
              </div>
              <div className="ml-5">
                <h3 className="text-xl font-semibold mb-4">Education</h3>
                <div className="mb-6">
                  <p className="text-gray-800 font-medium">Symbiosis Institute of Technology, Pune</p>
                  <p className="text-gray-600">B.Tech in Artificial Intelligence & Machine Learning (2023–2027)</p>
                  <p className="text-gray-600">GPA: 8.53</p>
                </div>
                <div>
                  <p className="text-gray-800 font-medium">DDMS P Obul Reddy Public School, Hyderabad</p>
                  <p className="text-gray-600">Higher Secondary (2021–2023), 95.8%</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card scroll-trigger">
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center">
                  <Trophy className="h-6 w-6 text-cyan-600" />
                </div>
              </div>
              <div className="ml-5">
                <h3 className="text-xl font-semibold mb-4">Recognitions</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-2">●</span>
                    Third Ranker in Semester 2
                  </li>
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-2">●</span>
                    Cummins Scholarship Awardee – AY 2023-2024
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card scroll-trigger">
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center">
                  <Briefcase className="h-6 w-6 text-cyan-600" />
                </div>
              </div>
              <div className="ml-5">
                <h3 className="text-xl font-semibold mb-4">Skills</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-800 font-medium">Languages</p>
                    <p className="text-gray-600">Python, C, Java, HTML, CSS, JavaScript, SQL</p>
                  </div>
                  <div>
                    <p className="text-gray-800 font-medium">Frameworks & Tools</p>
                    <p className="text-gray-600">
                      Flask, TensorFlow, Scikit-learn, LangChain, OpenAI API, Streamlit, NLTK, SpaCy, PowerBI
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-800 font-medium">Databases & Platforms</p>
                    <p className="text-gray-600">MySQL, PostgreSQL, SQLite, Linux, GCP, Aiven, Windows</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card scroll-trigger">
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center">
                  <Lightbulb className="h-6 w-6 text-cyan-600" />
                </div>
              </div>
              <div className="ml-5">
                <h3 className="text-xl font-semibold mb-4">Research & Entrepreneurship</h3>
                <p className="text-gray-600">
                  Actively pursuing an entrepreneurial journey through real-world solutions like DealPool and FarmIQ,
                  while also exploring research areas such as NLP, Generative AI, and AI in Education & Agriculture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
