import { useTheme } from '../../../hooks/useTheme'
import styles from './ThemeToggle.module.css'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      onClick={toggleTheme}
      className={`${styles.switch} ${isDark ? styles.dark : ''}`}
      role="switch"
      aria-checked={isDark}
    >
      <span className={`${styles.slider} ${isDark ? styles.active : ''}`} />
    </button>
  )
}
