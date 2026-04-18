import { selectSortedProducts } from './selectSortedProducts'
import { selectFilteredProducts } from './selectFilteredProducts'

export const selectVisibleProducts = (products, filters) => {
  if (!products?.length) return []

  const filteredProducts = selectFilteredProducts(products, filters)
  return selectSortedProducts(filteredProducts, filters)
}
