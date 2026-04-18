export function normalizeParams(product, searchParams) {
  const newParams = new URLSearchParams(searchParams)
  const colorId = Number(newParams.get('color'))
  const sizeId = Number(newParams.get('size'))
  let changed = false
  const validColor = product.colors.find((color) => color.id === colorId)

  if (!colorId || !validColor) {
    const fallbackColor = product.colors[0]

    if (fallbackColor) {
      newParams.set('color', fallbackColor.id)
      newParams.delete('size')
      changed = true
    }
  } else {
    const isValidSize = validColor.sizes.includes(sizeId)
    if (newParams.get('size') && !isValidSize) {
      newParams.delete('size')
      changed = true
    }
  }

  return { newParams, changed }
}
