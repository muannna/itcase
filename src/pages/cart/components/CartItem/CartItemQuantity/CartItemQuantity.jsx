import styles from './CartItemQuantity.module.css'

export function CartItemQuantity({ item }) {
  return (
    <p>
      <span className={styles.label}>Quantity: </span> {item.quantity}
    </p>
  )
}
