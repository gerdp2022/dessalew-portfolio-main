import skills from '../data/skills.js'
import './Skills.css'

const Skills = () => {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section-head">
          <span className="section-index">04</span>
          <h2 className="section-title">Skills</h2>
        </div>

        <div className="skills__grid">
          {skills.map((group) => (
            <div className="skills__group" key={group.category}>
              <h3 className="skills__category mono">{group.category}</h3>
              <ul className="skills__list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
