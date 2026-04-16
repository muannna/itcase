import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCartCount, selectCartTotal } from '../../../app/store/cart/selectors'
import { formatPrice } from '../../../utils/formatPrice'

import styles from './CartLink.module.css'

export function CartLink() {
  const count = useSelector(selectCartCount)
  const total = useSelector(selectCartTotal)
  return (
    <Link to="/cart" className={styles.cartLink}>
      <span className={styles.cartTitle}>Cart</span>
      <span className={styles.cartMeta}>
        <span className={styles.cartCount}>{count}</span>
        <span className={styles.cartDot}>·</span>
        <span className={styles.cartTotal}>{formatPrice(total)}</span>
      </span>
    </Link>
  )
}
