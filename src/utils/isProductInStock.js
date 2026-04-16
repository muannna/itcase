export const isProductInStock = (product) => {
  return product.colors.some((color) => color.sizes.length > 0)
}
