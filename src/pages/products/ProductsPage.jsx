import { useProductsViewModel } from '../../hooks/useProductsViewModel'
import { Filters } from './components/filters/Filters'
import { Loader } from '../../shared/ui/loader/Loader'
import { Error } from '../../shared/ui/error/Error'
import { ProductsPageContent } from './ProductsPageContent'

import styles from './ProductsPage.module.css'

export function ProductsPage() {
  const { isLoading, error, canShowFilters, products, sortedProducts, filters, updateFilter } =
    useProductsViewModel()
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
