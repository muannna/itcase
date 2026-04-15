import { useSelector, useDispatch } from 'react-redux'
import { useMemo } from 'react'
import { selectCartItems, selectCartCount } from '../../app/store/cart/selectors'
import { useCartPageData } from './useCartPageData'
import { useCartEnriched } from './useCartEnriched'
import { useCartTotals } from './useCartTotals'
import { clearCart } from '../../app/store/cart/cartSlice'

export function useCartViewModel() {
  const dispatch = useDispatch()

  const cart = useSelector(selectCartItems)
  const totalQuantity = useSelector(selectCartCount)

  const { products, sizes, isLoading, error } = useCartPageData()
  const enrichedCart = useCartEnriched(cart, products, sizes)
  const groupedCart = useMemo(() => {
    const available = []
    const unavailable = []
    const availableTitle = 'Available to buy'
    const unavailableTitle = 'Unavailable to buy'

    for (const item of enrichedCart) {
      if (item.isValid) {
        available.push(item)
      } else {
        unavailable.push(item)
      }
    }

    return { available, availableTitle, unavailable, unavailableTitle }
  }, [enrichedCart])

  const { total, validTotalQuantity } = useCartTotals(enrichedCart)

  const removeAllFromCart = () => {
    dispatch(clearCart())
  }

  return {
    isLoading,
    error,
    availableItems: groupedCart.available,
    availableTitle: groupedCart.availableTitle,
    unavailableItems: groupedCart.unavailable,
    unavailableTitle: groupedCart.unavailableTitle,
    total,
    totalQuantity,
    validTotalQuantity,
    removeAllFromCart,
    isEmpty: cart.length === 0,
  }
}
