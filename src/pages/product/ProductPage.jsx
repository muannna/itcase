import { useParams } from 'react-router-dom'
import { useProduct } from '../../queries/products/useProduct'
import { Loader } from '../../shared/ui/loader/Loader'
import { Error } from '../../shared/ui/error/Error'
import { ProductCard } from './components/product/ProductCard'

import styles from './ProductPage.module.css'

export function ProductPage() {
  const { id } = useParams()
  const { data: product, isLoading, error } = useProduct(id)

  let content = null

  if (isLoading) {
    content = <Loader text="Loading product card..." />
  } else if (error) {
    content = <Error error={error} message="Product does not exist" />
  } else {
    content = <ProductCard product={product} />
  }

  return <div className={styles.page}>{content}</div>
}
