export function getCheapestData(colors) {
  const availableColors = colors.filter((color) => color.sizes.length > 0)

  const source = availableColors.length ? availableColors : colors

  let min = Infinity
  let cheapestColor = null

  for (const color of source) {
    const price = Number(color.price)
    if (price < min) {
      min = price
      cheapestColor = color
    }
  }

  return {
    cheapestPrice: min === Infinity ? 0 : min,
    cheapestColor,
  }
}
