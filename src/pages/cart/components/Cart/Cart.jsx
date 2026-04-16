import { CartList } from '../CartList/CartList'
import { CartSummary } from '../CartSummary/CartSummary'
import { CartActions } from '../CartActions/CartActions'

import styles from './Cart.module.css'

export function Cart({ cart, totals, actions }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Cart</h1>
      <div className={`${styles.section} ${styles.available}`}>
        <CartList items={cart.availableItems} title={cart.availableTitle} />
      </div>
      {cart.unavailableItems.length > 0 && (
        <div className={`${styles.section} ${styles.unavailable}`}>
          <CartList items={cart.unavailableItems} title={cart.unavailableTitle} />
        </div>
      )}
      <CartSummary totals={totals} />
      <CartActions removeAllFromCart={actions.removeAllFromCart} />
    </div>
  )
}
