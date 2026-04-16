import { getCheapestPrice } from '../getSortedAvailableColors'

export const selectSortedProducts = (products, filters) => {
  const { sort } = filters
  return [...products].sort((a, b) => {
    if (sort === 'price-asc') {
      return getCheapestPrice(a.colors) - getCheapestPrice(b.colors)
    } else if (sort === 'price-desc') {
      return getCheapestPrice(b.colors) - getCheapestPrice(a.colors)
    } else {
      return 0
    }
  })
}
