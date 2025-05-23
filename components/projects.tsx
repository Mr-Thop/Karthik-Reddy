import ProjectSlider from "./project-slider"

export default function Projects() {
  return (
    <section id="projects" className="section section-light">
      <div className="container-custom">
        <h2 className="section-heading">
          My <span className="text-cyan-400">Projects</span>
        </h2>

        <div className="scroll-trigger">
          <ProjectSlider />
        </div>
      </div>
    </section>
  )
}
