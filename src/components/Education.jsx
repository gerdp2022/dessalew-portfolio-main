import education from '../data/education.js'
import './Education.css'

const Education = () => {
  return (
    <section id="education" className="section education">
      <div className="container">
        <div className="section-head">
          <span className="section-index">06</span>
          <h2 className="section-title">Education</h2>
        </div>

        <div className="edu-list">
          {education.map((item) => (
            <div className="edu-item" key={item.id}>
              <span className="edu-item__range mono">{item.range}</span>
              <div className="edu-item__body">
                <p className="edu-item__degree">{item.degree}</p>
                <p className="edu-item__org">
                  {item.org} <span className="edu-item__location">· {item.location}</span>
                </p>
                {item.note && <p className="edu-item__note">{item.note}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
