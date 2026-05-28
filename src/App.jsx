import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import useDarkMode from './hooks/useDarkMode'

function App() {

  const {isDark , toggleDark } = useDarkMode()

  return (
    <div className="xl:container xl:mx-auto xl:px-0 sm:px-5 px-3">
      <Navbar isDark={isDark} toggleDark={toggleDark} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
