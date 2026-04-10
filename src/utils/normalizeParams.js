import { deriveProductState } from './deriveProductState'

export function normalizeParams(product, searchParams) {
  const { cheapestColor, selectedColor } = deriveProductState(product, searchParams)
  const newParams = new URLSearchParams(searchParams)
  const colorId = Number(newParams.get('color'))
  const sizeId = Number(newParams.get('size'))
  let changed = false
  const isValidColor = product.colors.some((color) => color.id === Number(colorId))

  if (!colorId || !isValidColor) {
    newParams.set('color', cheapestColor.id)
    newParams.delete('size')
    changed = true
  }

  const isValidSize = selectedColor.sizes.includes(sizeId)

  if (newParams.get('size') && !isValidSize) {
    newParams.delete('size')
    changed = true
  }

  return { newParams, changed }
}
