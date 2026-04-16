import styles from './CartItemSize.module.css'

export function CartItemSize({ item }) {
  if (!item.size) {
    return (
      <p>
        <span className={styles.label}>Size: </span> {item.sizeNameAtAdd}
        <span className={styles.warning}> (deleted)</span>
      </p>
    )
  }
  if (!item.isSizeAvailable) {
    return (
      <p>
        <span className={styles.label}>Size: </span>
        {item.size.name} ({item.size.number})<span className={styles.warning}> unavailable</span>
      </p>
    )
  }

  return (
    <p>
      <span className={styles.label}>Size: </span> {item.size.name} ({item.size.number})
    </p>
  )
}
