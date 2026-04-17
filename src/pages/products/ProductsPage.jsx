import { useProducts } from '../../queries/products/useProducts'
import { Filters } from './components/filters/Filters'
import { selectVisibleProducts } from '../../utils/products/selectVisibleProducts'
import { useFilters } from '../../hooks/useFilters'
import { Loader } from '../../shared/ui/loader/Loader'
import { Error } from '../../shared/ui/error/Error'
import { ProductsPageContent } from './ProductsPageContent'

import styles from './ProductsPage.module.css'

export function ProductsPage() {
  const { data: products = [], isLoading, error } = useProducts()
  const { filters, updateFilter } = useFilters()

  const sortedProducts = selectVisibleProducts(products, filters)
  const canShowFilters = !error

  let content = null

  if (isLoading) {
    content = <Loader text="Loading products..." />
  } else if (error) {
    content = <Error error={error} message="Error loading products" />
  } else {
    content = <ProductsPageContent products={products} sortedProducts={sortedProducts} />
  }

  return (
    <div className={styles.page}>
      {canShowFilters && <Filters filters={filters} updateFilter={updateFilter} />}
      <h1 className={styles.title}>Products</h1>
      {content}
    </div>
  )
}
