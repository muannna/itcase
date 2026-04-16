import { Link } from 'react-router-dom'

import styles from './CartItemImage.module.css'

export function CartItemImage({ item }) {
  return (
    <Link to={`/product/${item.productId}?color=${item.colorId}`}>
      <img src={item.image} alt={item.productNameAtAdd} className={styles.cartImg} />
    </Link>
  )
}
