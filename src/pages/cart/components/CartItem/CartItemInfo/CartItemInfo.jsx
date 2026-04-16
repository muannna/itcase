import { CartItemTitle } from '../CartItemTitle/CartItemTitle'
import { CartItemColor } from '../CartItemColor/CartItemColor'
import { CartItemSize } from '../CartItemSize/CartItemSize'
import { CartItemQuantity } from '../CartItemQuantity/CartItemQuantity'
import { CartItemMessage } from '../CartItemMessage/CartItemMessage'
import { CartItemTotal } from '../CartItemTotal/CartItemTotal'

import styles from './CartItemInfo.module.css'

export function CartItemInfo({ item }) {
  return (
    <div className={styles.cartInfo}>
      <CartItemTitle item={item} />
      <CartItemColor item={item} />
      <CartItemSize item={item} />
      <CartItemQuantity item={item} />
      <CartItemMessage item={item} />
      <CartItemTotal item={item} />
    </div>
  )
}
