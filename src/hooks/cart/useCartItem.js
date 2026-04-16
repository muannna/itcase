import { useSelector } from 'react-redux'
import { selectCartItems } from '../../app/store/cart/selectors'
import { findItemInCartHelper } from '../../app/store/cart/cartHelpers'

export function useCartItem({ productId, colorId, sizeId }) {
  const cartItems = useSelector(selectCartItems)

  if (!productId || !colorId || !sizeId) {
    return {
      isInCart: false,
      quantity: 0,
    }
  }
  const item = findItemInCartHelper(cartItems, {
    productId,
    colorId,
    sizeId,
  })

  return {
    isInCart: Boolean(item),
    quantity: item?.quantity ?? 0,
  }
}
