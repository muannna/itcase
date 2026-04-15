import { CartItemImage } from './CartItemImage/CartItemImage'
import { CartItemInfo } from './CartItemInfo/CartItemInfo'
import { CartItemDelete } from './CartItemDelete/CartItemDelete'

import styles from './CartItem.module.css'

export function CartItem({ item }) {
  return (
    <li className={styles.item}>
      <div className={styles.left}>
        <CartItemImage item={item} />
        <CartItemInfo item={item} />
      </div>
      <CartItemDelete item={item} />
    </li>
  )
}
