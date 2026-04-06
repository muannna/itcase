export function getCheapestColor(colors) {
  const availableColors = colors.filter((color) => color.sizes.length > 0)

  const source = availableColors.length ? availableColors : colors

  return [...source].sort((a, b) => Number(a.price) - Number(b.price))[0]
}
