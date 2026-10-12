import projects from '../data/projects.js'
import './Projects.css'

const Projects = () => {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-head">
          <span className="section-index">03</span>
          <div>
            <h2 className="section-title">Projects</h2>
            <p className="section-sub">
              Clones and builds I've shipped while leveling up in full-stack development.
            </p>
          </div>
        </div>

        <div className="projects__grid">
          {projects.map((project) => {
            const isProgress = project.status === 'In progress'
            return (
              <article className="project-card" key={project.id}>
                <div className="project-card__window">
                  <span className="project-card__dots" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                  </span>
                  <span className="project-card__path mono">
                    ~/projects/{project.id}
                  </span>
                </div>

                <div className="project-card__body">
                  <div className="project-card__head">
                    <h3 className="project-card__name">{project.name}</h3>
                    <span
                      className={`project-card__status mono ${
                        isProgress ? 'is-progress' : 'is-done'
                      }`}
                    >
                      <span className="project-card__status-dot" />
                      {project.status}
                    </span>
                  </div>

                  <p className="project-card__desc">{project.description}</p>

                  <ul className="project-card__stack">
                    {project.stack.map((tech) => (
                      <li key={tech} className="mono">
                        {tech}
                      </li>
                    ))}
                  </ul>

                  {(project.links.demo || project.links.github) && (
                    <div className="project-card__links">
                      {project.links.demo && (
                        <a
                          className="btn btn--ghost btn--sm"
                          href={project.links.demo}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Live demo
                        </a>
                      )}
                      {project.links.github && (
                        <a
                          className="btn btn--ghost btn--sm"
                          href={project.links.github}
                          target="_blank"
                          rel="noreferrer"
                        >
                          View code
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
