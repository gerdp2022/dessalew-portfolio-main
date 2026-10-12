import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Certifications from './components/Certifications.jsx'
import Education from './components/Education.jsx'
import Recommendations from './components/Recommendations.jsx'
import Contact from './components/Contact.jsx'
import ChatBot from './components/ChatBot.jsx'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Education />
        <Recommendations />
      </main>
      <Contact />
      <ChatBot />
    </>
  )
}

export default App
