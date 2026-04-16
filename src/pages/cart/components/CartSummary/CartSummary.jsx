import { CartPromo } from '../CartPromo/CartPromo'

import styles from './CartSummary.module.css'

export function CartSummary({ totals }) {
  const hasUnavailableItems = totals.totalQuantity !== totals.validTotalQuantity
  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        {hasUnavailableItems ? (
          <>
            <p className={styles.warningText}>Some items are unavailable and excluded from total</p>
            <p className={styles.subText}>Original total: {totals.total}</p>
            <p className={styles.subText}>
              Available for purchase: {totals.validTotalQuantity} of {totals.totalQuantity}
            </p>
          </>
        ) : (
          <p className={styles.text}>Total items in cart: {totals.totalQuantity}</p>
        )}
        <CartPromo promoEligible={totals.promoEligible} />
      </div>

      <div className={styles.total}>
        <span className={styles.label}>Total:</span>
        <span className={styles.value}>{totals.validTotal}</span>
        <span className={styles.value}>{totals.finalTotal}</span>
      </div>
    </div>
  )
}
