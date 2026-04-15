import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
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
  const { total, validTotalQuantity } = useCartTotals(enrichedCart)

  const removeAllFromCart = () => {
    dispatch(clearCart())
  }

  return {
    isLoading,
    error,
    enrichedCart,
    total,
    totalQuantity,
    validTotalQuantity,
    removeAllFromCart,
    isEmpty: cart.length === 0,
  }
}
