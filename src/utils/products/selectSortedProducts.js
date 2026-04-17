export const selectSortedProducts = (products, filters) => {
  const { sort } = filters
  if (!sort) {
    return products
  }
  const result = [...products]
  if (sort === 'price-asc') {
    return result.sort((a, b) => a.cheapestPrice - b.cheapestPrice)
  }
  if (sort === 'price-desc') {
    return result.sort((a, b) => b.cheapestPrice - a.cheapestPrice)
  }

  return result
}
