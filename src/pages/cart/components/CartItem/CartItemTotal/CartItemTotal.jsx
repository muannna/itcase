import { formatPrice } from '../../../../../utils/formatPrice'

import styles from './CartItemTotal.module.css'

export function CartItemTotal({ item }) {
  const formatedCurrentPrice = formatPrice(item.currentPrice)
  const formatedTotal = formatPrice(item.currentPrice * item.quantity)

  return (
    <div className={styles.total}>
      {item.isValid && (
        <>
          <span className={styles.unit}>
            {formatedCurrentPrice} × {item.quantity}
          </span>
          <span className={styles.equals}>=</span>
          <span className={styles.final}>{formatedTotal}</span>
        </>
      )}
    </div>
  )
}
