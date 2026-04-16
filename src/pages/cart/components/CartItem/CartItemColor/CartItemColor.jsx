import styles from './CartItemColor.module.css'

export function CartItemColor({ item }) {
  if (!item.color) {
    return (
      <p>
        <span className={styles.label}>Color: </span>
        {item.colorNameAtAdd} <span className={styles.warning}>unavailable</span>
      </p>
    )
  }

  return (
    <p>
      <span className={styles.label}>Color: </span> {item.color.name}
    </p>
  )
}
