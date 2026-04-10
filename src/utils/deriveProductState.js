import { getCheapestColor } from './getSortedAvailableColors'

export function deriveProductState(product, searchParams) {
  const cheapestColor = getCheapestColor(product.colors)

  const colorId = Number(searchParams.get('color'))
  const sizeId = Number(searchParams.get('size'))

  const selectedColor = product.colors.find((c) => c.id === colorId) ?? cheapestColor

  const selectedSize = selectedColor.sizes.includes(sizeId) ? sizeId : null

  return { cheapestColor, selectedColor, selectedSize }
}
