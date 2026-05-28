import { TypeAnimation } from "react-type-animation"

function Hero() {
  return (
    <section className="text-gray-600 body-font min-h-screen flex items-center">
      <div className="flex flex-col px-5 lg:px-10 py-24 w-full">

        {/* Top label */}
        <p className="text-lg sm:text-xl font-medium text-indigo-500 mb-4 tracking-widest uppercase">
          Hey there, I am
        </p>

        {/* Big Name */}
        <h1 className="text-7xl sm:text-8xl xl:text-9xl font-black text-gray-900 dark:text-white leading-none tracking-tight mb-6">
          Pratik <br /> Tidke
        </h1>

        {/* Typed role */}
        <div className="text-2xl sm:text-4xl xl:text-5xl font-bold text-gray-400 mb-10">
          <TypeAnimation
            sequence={[
              "Software Engineer",
              2000,
              "Full Stack Developer",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </div>

        {/* Description */}
        <p className="max-w-xl text-lg sm:text-xl text-gray-500 dark:text-gray-400 mb-12 leading-relaxed">
          I build clean, fast and user-friendly web applications. Currently open to new opportunities.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 text-white bg-indigo-500 border-0 py-4 px-8 focus:outline-none hover:bg-indigo-600 hover:-translate-y-1 hover:scale-105 transition ease-in-out rounded-lg text-lg font-medium"
          >
            View My Work
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-gray-900 dark:text-white bg-transparent border-2 border-gray-900 dark:border-white py-4 px-8 focus:outline-none hover:bg-gray-900 hover:text-white hover:-translate-y-1 hover:scale-105 transition ease-in-out rounded-lg text-lg font-medium"
          >
            Contact Me
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex items-center gap-3 text-gray-400">
          <div className="w-10 h-[2px] bg-gray-400"></div>
          <span className="text-sm tracking-widest uppercase">Scroll to explore</span>
        </div>

      </div>
    </section>
  )
}

export default Hero