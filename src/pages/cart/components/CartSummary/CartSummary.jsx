import styles from './CartSummary.module.css'

export function CartSummary({ total, validTotal, totalQuantity, validTotalQuantity }) {
  const hasUnavailableItems = totalQuantity !== validTotalQuantity
  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        {hasUnavailableItems ? (
          <>
            <p className={styles.warningText}>Some items are unavailable and excluded from total</p>
            <p className={styles.subText}>Original total: {total}</p>
            <p className={styles.subText}>
              Available for purchase: {validTotalQuantity} of {totalQuantity}
            </p>
          </>
        ) : (
          <p className={styles.text}>Total items in cart: {totalQuantity}</p>
        )}
      </div>

      <div className={styles.total}>
        <span className={styles.label}>Total:</span>
        <span className={styles.value}>{validTotal}</span>
      </div>
    </div>
  )
}
