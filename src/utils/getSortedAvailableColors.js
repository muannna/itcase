function getSortedAvailableColors(colors) {
  const availableColors = colors.filter((color) => color.sizes.length > 0)

  const source = availableColors.length ? availableColors : colors

  return [...source].sort((a, b) => Number(a.price) - Number(b.price))
}

export function getCheapestColor(colors) {
  return getSortedAvailableColors(colors)[0]
}

export function getCheapestPrice(colors) {
  return Number(getSortedAvailableColors(colors)[0]?.price)
}
