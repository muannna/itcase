import styles from './Button.module.css'

export function Button({ children, onClick, disabled = false }) {
  return (
    <button type="button" onClick={onClick} className={styles.button} disabled={disabled}>
      {children}
    </button>
  )
}
