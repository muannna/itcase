import { useMemo } from 'react'
import { formatPrice } from '../../utils/formatPrice'

export function useCartTotals(enrichedCart) {
  return useMemo(() => {
    const validItems = enrichedCart.filter((item) => item.isValid)
    const totalValue = validItems.reduce((sum, item) => {
      return sum + item.currentPrice * item.quantity
    }, 0)
    const validTotal = formatPrice(totalValue)
    const validTotalQuantity = validItems.reduce((sum, item) => {
      return sum + item.quantity
    }, 0)

    return {
      validTotal,
      validTotalQuantity,
    }
  }, [enrichedCart])
}
