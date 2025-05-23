import { Award, Trophy, Medal } from "lucide-react"

const achievements = [
  {
    title: "Grand Finalist",
    event: "New India Vibrant Hackathon 2023",
    icon: Trophy,
  },
  {
    title: "3rd Place",
    event: "Aarambh Season 2 (Business Pitch)",
    icon: Medal,
  },
  {
    title: "Finalist",
    event: "Entrepreneurial Meet @ BITS Pilani Goa",
    icon: Award,
  },
  {
    title: "Finalist",
    event: "The Better Hackathon, WeWorkSpaces",
    icon: Award,
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="section section-dark">
      <div className="container-custom">
        <h2 className="section-heading">
          <span className="text-cyan-400">Achievements</span> & Recognition
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="card text-center scroll-trigger" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyan-100 mb-4">
                <achievement.icon className="h-8 w-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
              <p className="text-gray-600">{achievement.event}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 card scroll-trigger">
          <h3 className="text-2xl font-semibold mb-6 text-center">Academic Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center">
                  <Trophy className="h-6 w-6 text-cyan-600" />
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium">Third Ranker in Semester 2</h4>
                <p className="text-gray-600">Symbiosis Institute of Technology, Pune</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center">
                  <Award className="h-6 w-6 text-cyan-600" />
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium">Cummins Scholarship Awardee</h4>
                <p className="text-gray-600">Academic Year 2023-2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
