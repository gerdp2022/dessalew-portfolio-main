import certifications from '../data/certifications.js'
import './Certifications.css'

const Certifications = () => {
  return (
    <section id="certifications" className="section certifications">
      <div className="container">
        <div className="section-head">
          <span className="section-index">05</span>
          <div>
            <h2 className="section-title">Certifications</h2>
            <p className="section-sub">
              Ongoing training across infrastructure, business, software development, and humanitarian-sector skills.
            </p>
          </div>
        </div>

        {certifications.map((group) => (
          <div className="cert-group" key={group.category}>
            <h3 className="cert-group__title mono">{group.category}</h3>
            <div className="cert-grid">
              {group.items.map((cert) => (
                <div className="cert-card" key={cert.name}>
                  <p className="cert-card__name">{cert.name}</p>
                  <p className="cert-card__issuer">{cert.issuer}</p>
                  <p className="cert-card__date mono">{cert.date}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Certifications
