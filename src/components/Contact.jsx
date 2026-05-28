import { useState } from "react"
import emailjs from "@emailjs/browser"
import useScrollAnimation from "../hooks/useScrollAnimation"

function Contact() {
  const { ref, isVisible } = useScrollAnimation()
  const anim = `animate-hidden ${isVisible ? "animate-visible" : ""}`

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState("")

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid"
    if (!formData.message.trim()) newErrors.message = "Message is required"
    return newErrors
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: "" })
  }

  const handleSubmit = async () => {
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setStatus("sending")

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      setStatus("success")
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="text-gray-600 body-font relative" ref={ref}>
      <div className="container px-5 py-24 mx-auto">

        <div className="flex flex-col text-center w-full mb-12">
          <h1 className={`${anim} delay-100 sm:text-5xl text-3xl font-bold title-font mb-4 text-gray-900`}>
            Contact Me
          </h1>
          <p className={`${anim} delay-200 lg:w-2/3 mx-auto leading-relaxed text-lg`}>
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify Lorem ipsum dolor sit amet.
          </p>
        </div>

        <div className="lg:w-2/3 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2 justify-end">

            <div className={`${anim} delay-200 p-5 sm:w-1/2 w-full`}>
              <div className="relative">
                <label htmlFor="name" className="leading-10 text-lg text-gray-600 dark:text-gray-300">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-100 dark:bg-gray-700 dark:text-white bg-opacity-50 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-indigo-500 focus:bg-white dark:focus:bg-gray-600 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
            </div>

            <div className={`${anim} delay-300 p-5 sm:w-1/2 w-full`}>
              <div className="relative">
                <label htmlFor="email" className="leading-10 text-lg text-gray-600 dark:text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-100 dark:bg-gray-700 dark:text-white bg-opacity-50 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-indigo-500 focus:bg-white dark:focus:bg-gray-600 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
            </div>

            <div className={`${anim} delay-400 p-5 w-full`}>
              <div className="relative">
                <label htmlFor="message" className="leading-10 text-lg text-gray-600 dark:text-gray-300">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-gray-100 dark:bg-gray-700 dark:text-white bg-opacity-50 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-indigo-500 focus:bg-white dark:focus:bg-gray-600 focus:ring-2 focus:ring-indigo-200 h-72 text-base outline-none text-gray-700 py-3 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"        
                />        
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>
            </div>

            <div className={`${anim} delay-500 py-5 w-full flex flex-col items-center gap-4`}>

              {/* Status messages */}
              {status === "sending" && (
                <p className="text-indigo-500 text-lg">Sending...</p>
              )}
              {status === "success" && (
                <p className="text-green-500 text-lg">✅ Message sent successfully!</p>
              )}
              {status === "error" && (
                <p className="text-red-500 text-lg">❌ Something went wrong. Please try again.</p>
              )}

              <button
                onClick={handleSubmit}
                disabled={status === "sending"}
                className="flex mx-auto text-white bg-indigo-500 border-0 py-4 px-20 focus:outline-none hover:bg-indigo-600 rounded text-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "sending" ? "Sending..." : "Submit"}
              </button>

            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact