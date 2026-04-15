import { Link } from 'react-router-dom'

import styles from './CartItemTitle.module.css'

export function CartItemTitle({ item }) {
  return (
    <Link to={`/product/${item.productId}`}>
      <p className={styles.itemTitle}>
        {item.product?.name ?? item.productNameAtAdd}{' '}
        {item.product?.brand ?? item.productBrandAtAdd}
      </p>
    </Link>
  )
}
