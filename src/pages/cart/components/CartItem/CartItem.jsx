import { CartItemImage } from './CartItemImage/CartItemImage'
import { CartItemTitle } from './CartItemTitle/CartItemTitle'
import { CartItemColor } from './CartItemColor/CartItemColor'
import { CartItemSize } from './CartItemSize/CartItemSize'
import { CartItemQuantity } from './CartItemQuantity/CartItemQuantity'
import { CartItemMessage } from './CartItemMessage/CartItemMessage'
import { CartItemTotal } from './CartItemTotal/CartItemTotal'

export function CartItem({ item }) {
  return (
    <li>
      <CartItemImage item={item} />
      <CartItemTitle item={item} />
      <CartItemColor item={item} />
      <CartItemSize item={item} />
      <CartItemQuantity item={item} />
      <CartItemMessage item={item} />
      <CartItemTotal item={item} />
    </li>
  )
}
