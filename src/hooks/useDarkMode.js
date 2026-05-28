import { useEffect, useState } from "react"

function useDarkMode() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark"
  })

  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      root.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [isDark])

  const toggleDark = () => setIsDark((prev) => !prev)

  return { isDark, toggleDark }
}

export default useDarkMode