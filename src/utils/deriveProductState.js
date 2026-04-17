export function deriveProductState(product, searchParams) {
  const colorId = Number(searchParams.get('color'))
  const sizeId = Number(searchParams.get('size'))

  const selectedColor = product.colors.find((color) => color.id === colorId) ?? product.colors[0]

  const selectedSize = selectedColor.sizes.includes(sizeId) ? sizeId : null

  return { selectedColor, selectedSize }
}
