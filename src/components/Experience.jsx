import { useState } from 'react'
import experience from '../data/experience.js'
import './Experience.css'

const Experience = () => {
  const [openId, setOpenId] = useState(experience[0].id)

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="section-head">
          <span className="section-index">02</span>
          <div>
            <h2 className="section-title">Experience</h2>
            <p className="section-sub">
              13+ years across help desk, systems engineering, and infrastructure administration.
            </p>
          </div>
        </div>

        <ol className="log">
          {experience.map((job) => {
            const isOpen = openId === job.id
            return (
              <li key={job.id} className={`log__entry ${isOpen ? 'is-open' : ''}`}>
                <button
                  className="log__header"
                  onClick={() => setOpenId(isOpen ? null : job.id)}
                  aria-expanded={isOpen}
                >
                  <span className="log__timestamp mono">[ {job.range} ]</span>
                  <span className="log__role">
                    {job.role}
                    <span className="log__org"> — {job.org}</span>
                  </span>
                  <span className="log__caret mono" aria-hidden="true">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                <div className="log__body">
                  <p className="log__location mono">{job.location}</p>
                  <ul className="log__bullets">
                    {job.bullets.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}

export default Experience
