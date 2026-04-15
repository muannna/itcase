import { CartList } from '../CartList/CartList'
import { CartSummary } from '../CartSummary/CartSummary'
import { CartActions } from '../CartActions/CartActions'

import styles from './Cart.module.css'

export function Cart({
  availableItems,
  availableTitle,
  unavailableItems,
  unavailableTitle,
  total,
  validTotal,
  totalQuantity,
  validTotalQuantity,
  removeAllFromCart,
}) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Cart</h1>
      <div className={`${styles.section} ${styles.available}`}>
        <CartList items={availableItems} title={availableTitle} />
      </div>
      {unavailableItems.length > 0 && (
        <div className={`${styles.section} ${styles.unavailable}`}>
          <CartList items={unavailableItems} title={unavailableTitle} />
        </div>
      )}
      <CartSummary
        total={total}
        validTotal={validTotal}
        totalQuantity={totalQuantity}
        validTotalQuantity={validTotalQuantity}
      />
      <CartActions removeAllFromCart={removeAllFromCart} />
    </div>
  )
}
