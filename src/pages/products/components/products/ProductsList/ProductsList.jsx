import { ProductCard } from '../ProductCard/ProductCard'

import styles from './ProductsList.module.css'

export function ProductsList({ products }) {
  return (
    <div className={styles.products}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
