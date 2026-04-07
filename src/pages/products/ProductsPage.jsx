import { useProducts } from '../../queries/products/useProducts'
import { ProductsList } from './components/products/ProductsList'
import { Filters } from './components/filters/Filters'
import { selectVisibleProducts } from '../../app/store/selectors/products/selectVisibleProducts'
import { useFilters } from '../../hooks/useFilters'

export function ProductsPage() {
  const { data: products = [], isLoading, error } = useProducts()
  const { filters, updateFilter } = useFilters()

  const sortedProducts = selectVisibleProducts(products, filters)

  if (isLoading) {
    return <p>Loading products...</p>
  }

  if (error) {
    return <p>Error loading products: {error.message}</p>
  }

  if (!products || !products.length) {
    return (
      <div>
        <h1>Products</h1>
        <p>No products available.</p>
      </div>
    )
  }

  return (
    <div>
      <Filters filters={filters} updateFilter={updateFilter} />
      <div>
        <h1>Products</h1>
        <ProductsList products={sortedProducts} />
      </div>
    </div>
  )
}
