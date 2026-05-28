import useScrollAnimation from "../hooks/useScrollAnimation"

function About() {
  const { ref, isVisible } = useScrollAnimation()
  const anim = `animate-hidden ${isVisible ? "animate-visible" : ""}`

  return (
    <section id="about" className="text-gray-600 body-font" ref={ref}>
      <div className="container mx-auto flex px-5 py-24 lg:flex-row flex-col items-center justify-center gap-10">

       <div className={`${anim} delay-100 flex items-center justify-center lg:w-1/2 w-full`}>
          <img
            className="w-3/4 h-auto object-contain"
            alt="about"
            src="https://themewagon.github.io/satner/img/banner/home-right.png"
          />
        </div>

        <div className="lg:w-1/2 w-full flex flex-col md:items-start text-left">
          <h1 className={`${anim} delay-200 sm:text-5xl text-3xl font-bold title-font mb-10 text-gray-900`}>
            Get to know me !
          </h1>

          <div className="mb-10 leading-relaxed text-xl">
            <p className={`${anim} delay-300`}>
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken.
            </p>
            <br />
            <p className={`${anim} delay-400`}>
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken.
            </p>
            <br />
            <p className={`${anim} delay-500`}>
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo.
            </p>
          </div>

          <div className={`${anim} delay-500 w-full flex sm:flex-row flex-col items-center justify-between gap-5`}>
            <button className="w-full sm:w-max sm:inline-flex items-center text-white bg-gray-900 border-0 py-3 sm:py-4 px-10 focus:outline-none hover:bg-indigo-600 rounded-lg text-lg hover:-translate-y-1 hover:scale-110 transition ease-in-out">
              Download Resume
            </button>
            <div className="sm:self-end flex items-center gap-4">
              <a href="" className="p-3 rounded-full hover:bg-gray-200">
                <svg className="hidden sm:block" width="30px" height="30px" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20,2H4C2.9,2,2,2.9,2,4v16c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M8.1,18H5V9.4h3.1V18z M6.5,8.4C5.6,8.4,5,7.8,5,7s0.6-1.4,1.6-1.4c0.9,0,1.5,0.6,1.5,1.4S7.5,8.4,6.5,8.4z M19,18h-3.1v-4.7c0-1.3-0.8-1.6-1.1-1.6s-1.3,0.2-1.3,1.6c0,0.2,0,4.7,0,4.7h-3.1V9.4h3.1v1.2c0.4-0.7,1.2-1.2,2.7-1.2s2.7,1.2,2.7,3.9L19,18L19,18z"/>
                </svg>
                <span className="sm:hidden block underline">LinkedIn</span>
              </a>
              <a href="" className="p-3 rounded-full hover:bg-gray-200">
                <svg className="hidden sm:block" fill="#000000" width="30px" height="30px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 1.375c-8.282 0-14.996 6.714-14.996 14.996 0 6.585 4.245 12.18 10.148 14.195l0.106 0.031c0.75 0.141 1.025-0.322 1.025-0.721 0-0.356-0.012-1.3-0.019-2.549-4.171 0.905-5.051-2.012-5.051-2.012-0.288-0.925-0.878-1.685-1.653-2.184l-0.016-0.009c-1.358-0.93 0.105-0.911 0.105-0.911 0.987 0.139 1.814 0.718 2.289 1.53l0.008 0.015c0.554 0.995 1.6 1.657 2.801 1.657 0.576 0 1.116-0.152 1.582-0.419l-0.016 0.008c0.072-0.791 0.421-1.489 0.949-2.005l0.001-0.001c-3.33-0.375-6.831-1.665-6.831-7.41-0-0.027-0.001-0.058-0.001-0.089 0-1.521 0.587-2.905 1.547-3.938l-0.003 0.004c-0.203-0.542-0.321-1.168-0.321-1.821 0-0.777 0.166-1.516 0.465-2.182l-0.014 0.034s1.256-0.402 4.124 1.537c1.124-0.321 2.415-0.506 3.749-0.506s2.625 0.185 3.849 0.53l-0.1-0.024c2.849-1.939 4.105-1.537 4.105-1.537 0.285 0.642 0.451 1.39 0.451 2.177 0 0.642-0.11 1.258-0.313 1.83l0.012-0.038c0.953 1.032 1.538 2.416 1.538 3.937 0 0.031-0 0.061-0.001 0.091l0-0.005c0 5.761-3.505 7.029-6.842 7.398 0.632 0.647 1.022 1.532 1.022 2.509 0 0.093-0.004 0.186-0.011 0.278l0.001-0.012c0 2.007-0.019 3.619-0.019 4.106 0 0.394 0.262 0.862 1.031 0.712 6.028-2.029 10.292-7.629 10.292-14.226 0-8.272-6.706-14.977-14.977-14.977-0.006 0-0.013 0-0.019 0h0.001z"/>
                </svg>
                <span className="sm:hidden block underline">Github</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About