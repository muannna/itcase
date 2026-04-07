import { useProducts } from '../../queries/products/useProducts'
import { ProductCard } from './components/ProductCard'
import { useSearchParams } from 'react-router-dom'
import { selectVisibleProducts } from '../../app/store/selectors/products/selectVisibleProducts'

export function ProductsPage() {
  const { data: products = [], isLoading, error } = useProducts()
  const [searchParams, setSearchParams] = useSearchParams()

  const filters = {
    search: searchParams.get('search') || '',
    inStock: searchParams.get('inStock') === 'true',
    sort: searchParams.get('sort') || 'default',
  }

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
      <input
        type="text"
        placeholder="Search products..."
        value={filters.search}
        onChange={(e) => {
          const params = new URLSearchParams(searchParams)
          if (e.target.value) {
            params.set('search', e.target.value)
          } else {
            params.delete('search')
          }
          setSearchParams(params)
        }}
      />
      <select
        value={filters.sort}
        onChange={(e) => {
          const params = new URLSearchParams(searchParams)
          if (e.target.value === 'default') {
            params.delete('sort')
          } else {
            params.set('sort', e.target.value)
          }
          setSearchParams(params)
        }}
      >
        <option value="default">Default</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
      </select>
      <label>
        <input
          type="checkbox"
          checked={filters.inStock}
          onChange={(e) => {
            const params = new URLSearchParams(searchParams)
            if (e.target.checked) {
              params.set('inStock', 'true')
            } else {
              params.delete('inStock')
            }
            setSearchParams(params)
          }}
        />
        In Stock Only
      </label>
      <div>
        <h1>Products</h1>
        <div>
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
