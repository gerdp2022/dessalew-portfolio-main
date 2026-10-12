import './Contact.css'

const Contact = () => {
  return (
    <footer id="contact" className="contact">
      <div className="container contact__inner">
        <div className="contact__main">
          <p className="contact__eyebrow mono">Get in touch</p>
          <h2 className="contact__title">
            Open to infrastructure &amp; IT administration roles — remote or on-site.
          </h2>

          <div className="contact__links">
            <a href="mailto:desuy26@gmail.com" className="contact__link">
              desuy26@gmail.com
            </a>
            <a href="tel:+251940216092" className="contact__link">
              (+251) 940 216 092
            </a>
            <a
              href="https://www.linkedin.com/in/dessalew-yeshiwas-a16a1a95"
              target="_blank"
              rel="noreferrer"
              className="contact__link"
            >
              linkedin.com/in/dessalew-yeshiwas
            </a>
          </div>
        </div>

        <div className="contact__meta">
          <p className="mono">Based in Addis Ababa, Ethiopia</p>
          <p className="mono">© {new Date().getFullYear()} Dessalew Yeshiwas</p>
        </div>
      </div>
    </footer>
  )
}

export default Contact
