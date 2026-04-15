import { CartItemImage } from './CartItemImage/CartItemImage'
import { CartItemInfo } from './CartItemInfo/CartItemInfo'

import styles from './CartItem.module.css'

export function CartItem({ item }) {
  return (
    <li className={styles.item}>
      <CartItemImage item={item} />
      <CartItemInfo item={item} />
    </li>
  )
}
