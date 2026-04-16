import { useState } from 'react'

export function useTheme() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return { theme, toggleTheme }
}
