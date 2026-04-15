import styles from './Button.module.css'

export function Button({
  children,
  onClick,
  disabled = false,
  isActive = false,
  isAvailable = true,
  isCart = false,
}) {
  const classes = [
    styles.button,
    isActive && styles.selectedBut,
    !isAvailable && styles.notAvailableBut,
    isCart && styles.isCart,
  ]
    .filter(Boolean)
    .join(' ')
  return (
    <button type="button" onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  )
}
