import { useState } from "react"
import useActiveSection from "../hooks/useActiveSection"

function Navbar({ isDark, toggleDark }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const activeSection = useActiveSection()

  const navLinks = [
    { label: "Home", href: "#", id: "" },
    { label: "About Me", href: "#about", id: "about" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Contact Me", href: "#contact", id: "contact" },
  ]

  const menuClass = isMenuOpen ? "h-screen" : "h-0 lg:h-full"

  return (
    <header className="text-gray-600 body-font">
      <div className="mx-auto py-5 flex flex-row items-center justify-between">

        {/* Logo */}
          <a id="nav-icon" className="flex title-font font-medium items-center">
            <span className="ml-3 text-xl sm:text-3xl font-black font-mono">
              <span className="text-indigo-400">&lt;</span>
              <span className="text-gray-900 dark:text-white">P</span>
              <span className="text-indigo-500">T</span>
              <span className="text-indigo-400">/&gt;</span>
            </span>
          </a>

        <div className="relative flex flex-row-reverse lg:flex-row items-center self-end">

          {/* Nav Menu */}
          <nav className={`bg-white dark:bg-gray-900 lg:bg-transparent lg:dark:bg-transparent fixed w-full top-0 left-0 lg:static flex lg:flex-row flex-col lg:flex-wrap items-center text-base justify-center gap-12 overflow-hidden transition-all ease-in-out duration-300 z-50 ${menuClass}`}>

            {/* Close button */}
            <span
              className="cursor-pointer lg:hidden absolute top-5 right-5"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </span>

            {/* Nav Links */}
            {navLinks.map(({ label, href, id }) => (
              <a
                key={label}
                href={href}
                onClick={() => setIsMenuOpen(false)}
                className={`nav-link lg:text-xl text-4xl lg:font-medium font-semibold transition-colors duration-200
                  ${activeSection === id
                    ? "text-indigo-500 font-bold"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  }`}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Menu Actions */}
          <div id="menu-actions" className="ml-10 flex items-center gap-5">

            {/* Dark mode toggle */}
            <span className="cursor-pointer" onClick={toggleDark}>
              {isDark ? (
                <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
                  <path fillRule="evenodd" clipRule="evenodd" d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z" className="bg-transparent"></path>
                  <path d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z" className="fill-gray-900 dark:fill-white"></path>
                  <path fillRule="evenodd" clipRule="evenodd" d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z" className="fill-gray-900 dark:fill-white"></path>
                </svg>
              )}
            </span>

            {/* Hamburger */}
            <span
              className="cursor-pointer lg:hidden"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </span>

          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar