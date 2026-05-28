import { skills } from "../data/skills"
import useScrollAnimation from "../hooks/useScrollAnimation"

function Skills() {
  const { ref, isVisible } = useScrollAnimation()
  const anim = `animate-hidden ${isVisible ? "animate-visible" : ""}`

  return (
    <section id="skills" className="text-gray-600 body-font" ref={ref}>
      <div className="container px-5 py-24 mx-auto">

        <div className="flex flex-col text-center w-full sm:mb-20 mb-10">
          <h1 className={`${anim} delay-100 sm:text-5xl text-3xl font-bold mb-4 text-gray-900`}>
            My Skills
          </h1>
          <p className={`${anim} delay-200 lg:w-2/3 mx-auto leading-relaxed text-lg`}>
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.
          </p>
        </div>

        <div className="max-w-6xl flex flex-wrap items-center m-auto">
          {skills.map(({ name, level, icon }, index) => (
            <div
              key={index}
              className={`animate-hidden ${isVisible ? "animate-visible" : ""} p-4 lg:w-1/3 sm:w-1/2 w-full`}
              style={{ transitionDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg hover:scale-110 hover:shadow-lg transition ease-in-out duration-300">
                <img src={icon} alt={name} className="w-10 h-10 mr-4" />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font text-xl font-medium">{name}</h2>
                  <p className="text-gray-500 text-sm">{level}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills