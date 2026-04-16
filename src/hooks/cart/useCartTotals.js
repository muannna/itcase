import { useMemo } from 'react'
import { formatPrice } from '../../utils/formatPrice'

export function useCartTotals(enrichedCart, promo) {
  return useMemo(() => {
    const validItems = enrichedCart.filter((item) => item.isValid)
    const totalValue = validItems.reduce((sum, item) => {
      return sum + item.currentPrice * item.quantity
    }, 0)
    const validTotal = formatPrice(totalValue)
    const validTotalQuantity = validItems.reduce((sum, item) => {
      return sum + item.quantity
    }, 0)

    const promoData = promo?.code ? promo : null
    const promoEligible = promoData && totalValue >= promoData.minTotal
    const discountMultiplier = promoEligible ? 1 - promoData.discount / 100 : 1
    const finalTotal = formatPrice(totalValue * discountMultiplier)

    return {
      validTotal,
      validTotalQuantity,
      finalTotal,
      promoEligible,
    }
  }, [enrichedCart, promo])
}
