import recommendations from '../data/recommendations.js'
import './Recommendations.css'

const Recommendations = () => {
  return (
    <section id="recommendations" className="section recommendations">
      <div className="container">
        <div className="section-head">
          <span className="section-index">07</span>
          <h2 className="section-title">Recommendations</h2>
        </div>

        <div className="rec-grid">
          {recommendations.map((rec) => (
            <blockquote className="rec-card" key={rec.name}>
              <p className="rec-card__quote">“{rec.quote}”</p>
              <footer className="rec-card__footer">
                <p className="rec-card__name">{rec.name}</p>
                <p className="rec-card__title">{rec.title}</p>
                <p className="rec-card__context mono">{rec.context}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Recommendations
