import { useMemo } from 'react'

export function useCartEnriched(cart, products, sizes) {
  return useMemo(() => {
    const sizeMap = Object.fromEntries(sizes.map((size) => [size.id, size]))
    const productMap = Object.fromEntries(products.map((product) => [product.id, product]))

    return cart.map((item) => {
      const product = productMap[item.productId] || null
      const color = product?.colors.find((color) => color.id === item.colorId) || null
      const isSizeAvailable = color?.sizes?.includes(item.sizeId) ?? false
      const size = sizeMap[item.sizeId] || null
      const currentPrice = color?.price ?? null
      const isPriceChanged = color?.price != null && color.price !== item.priceAtAdd
      const isValid = Boolean(color && size && isSizeAvailable)

      return {
        ...item,
        product,
        color,
        size,
        isSizeAvailable,
        currentPrice,
        isPriceChanged,
        isValid,
      }
    })
  }, [cart, products, sizes])
}
