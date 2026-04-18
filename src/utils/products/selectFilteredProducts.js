export const selectFilteredProducts = (products, filters) => {
  let result = products
  if (filters.inStock) {
    result = result.filter((product) => product.inStock)
  }
  if (filters.search) {
    result = result.filter((product) =>
      product.name.toLowerCase().includes(filters.search.toLowerCase()),
    )
  }
  return result
}
