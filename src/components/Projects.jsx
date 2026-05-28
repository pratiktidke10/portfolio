import { projects } from "../data/projects"
import useScrollAnimation from "../hooks/useScrollAnimation"

function ProjectItem({ name, description, technologies, image, liveLink, sourceLink, reverse }) {
  const { ref, isVisible } = useScrollAnimation()
  const anim = `animate-hidden ${isVisible ? "animate-visible" : ""}`

  return (
    <div ref={ref} className="max-w-7xl mx-auto text-gray-600 body-font">
      <div className={`container mx-auto flex px-5 py-24 md:flex-row items-center gap-10 ${reverse ? "flex-col-reverse" : "flex-col"}`}>

        {!reverse && (
          <div className={`${anim} delay-100 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center`}>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{name}</h1>
            <p className="mb-8 leading-relaxed text-md">
              {description}
              <br /><br />
              <span className="text-black dark:text-white font-bold mr-3 block">Technologies used:</span>
              {technologies}
            </p>
            <div className="flex justify-center">
              <a href={liveLink} className="inline-flex items-center text-white bg-indigo-500 border-0 py-3 px-6 focus:outline-none hover:bg-indigo-600 rounded text-md">Live site</a>
              <a href={sourceLink} className="ml-4 inline-flex items-center text-gray-700 bg-gray-100 border-0 py-3 px-6 focus:outline-none hover:bg-gray-200 rounded text-md">Source code</a>
            </div>
          </div>
        )}

        <div className={`${anim} delay-200 lg:max-w-xl lg:w-full md:w-1/2 w-5/6 overflow-hidden`}>
          <img className="object-cover object-center rounded-2xl" alt={name} src={image} />
        </div>

        {reverse && (
          <div className={`${anim} delay-100 lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center`}>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{name}</h1>
            <p className="mb-8 leading-relaxed text-md">
              {description}
              <br /><br />
              <span className="text-black dark:text-white font-bold mr-3 block">Technologies used:</span>
              {technologies}
            </p>
            <div className="flex justify-center">
              <a href={liveLink} className="inline-flex items-center text-white bg-indigo-500 border-0 py-3 px-6 focus:outline-none hover:bg-indigo-600 rounded text-md">Live site</a>
              <a href={sourceLink} className="ml-4 inline-flex items-center text-gray-700 bg-gray-100 border-0 py-3 px-6 focus:outline-none hover:bg-gray-200 rounded text-md">Source code</a>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

function Projects() {
  const { ref, isVisible } = useScrollAnimation()
  const anim = `animate-hidden ${isVisible ? "animate-visible" : ""}`

  return (
    <section id="projects" className="text-gray-600 body-font">
      <div className="px-5 py-24 mx-auto">

        <div ref={ref} className="flex flex-col text-center w-full mb-20">
          <h1 className={`${anim} delay-100 sm:text-5xl text-3xl font-bold title-font mb-4 text-gray-900`}>
            My Projects
          </h1>
          <p className={`${anim} delay-200 lg:w-2/3 mx-auto leading-relaxed text-lg`}>
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.
          </p>
        </div>

        {projects.map((project) => (
          <ProjectItem key={project.id} {...project} />
        ))}

      </div>
    </section>
  )
}

export default Projects