import "./About.css";
import aboutPhoto from "../assets/about-photo.jpg";

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-head">
          <span className="section-index">01</span>
          <h2 className="section-title">About</h2>
        </div>

        <div className="about__grid">
          <div className="about__body">
            <p>
              I'm a native Ethiopian IT professional with more than 13 years of
              experience keeping infrastructure reliable — from Active Directory
              and Exchange to hypervisors, backups, and cloud-managed networks.
            </p>
            <p>
              For most of that time I was the IT Administrator at the{" "}
              <strong>Grand Ethiopian Renaissance Dam Project</strong>, one of
              Africa's largest construction sites, where I ran the server room
              and network for a workforce that couldn't afford downtime. That
              meant owning everything from VMware and Windows Server to Cisco
              Meraki, drone calibration, and even an FM radio broadcast setup
              for site morale.
            </p>
            <p>
              More recently I've shifted toward remote infrastructure and cloud
              work with Florida University Southeast, and completed
              certifications in international humanitarian law, cybersecurity,
              and AI. I'm currently studying AI-Powered Fullstack Application
              Development and completed Odoo training focused on manufacturing —
              building toward roles that blend IT infrastructure with
              full-stack development.
            </p>
          </div>

          <div className="about__side">
            <div className="about__photo">
              <img src={aboutPhoto} alt="Dessalew Yeshiwas at graduation" />
            </div>

            <div className="about__facts">
              <div className="about__fact">
                <span className="mono about__fact-label">Location</span>
                <span>Addis Ababa, Ethiopia</span>
              </div>
              <div className="about__fact">
                <span className="mono about__fact-label">Focus</span>
                <span>
                  Infrastructure, networking, cloud &amp; endpoint management
                </span>
              </div>
              <div className="about__fact">
                <span className="mono about__fact-label">Languages</span>
                <span>Amharic (native) · English (C1)</span>
              </div>
              <div className="about__fact">
                <span className="mono about__fact-label">Works well</span>
                <span>
                  Under hardship conditions, on tight schedules, solving as it
                  goes
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
