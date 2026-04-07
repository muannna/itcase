import { useProducts } from '../../queries/products/useProducts'
import { ProductsList } from './components/products/ProductsList'
import { Filters } from './components/filters/Filters'
import { selectVisibleProducts } from '../../app/store/selectors/products/selectVisibleProducts'
import { useFilters } from '../../hooks/useFilters'
import { Loader } from '../../shared/ui/loader/Loader'
import { Error } from '../../shared/ui/error/Error'

export function ProductsPage() {
  const { data: products = [], isLoading, error } = useProducts()
  const { filters, updateFilter } = useFilters()

  const sortedProducts = selectVisibleProducts(products, filters)
  const hasProducts = products && products.length > 0
  const hasFilteredProducts = sortedProducts && sortedProducts.length > 0
  const canShowFilters = !error

  let content = null

  if (isLoading) {
    content = <Loader text="Loading products..." />
  } else if (error) {
    content = <Error error={error} message="Error loading products" />
  } else if (!hasProducts) {
    content = <p>No products available.</p>
  } else {
    content = !hasFilteredProducts ? (
      <p>No products match the current filters.</p>
    ) : (
      <ProductsList products={sortedProducts} />
    )
  }

  return (
    <div>
      {canShowFilters && <Filters filters={filters} updateFilter={updateFilter} />}
      <h1>Products</h1>
      {content}
    </div>
  )
}
