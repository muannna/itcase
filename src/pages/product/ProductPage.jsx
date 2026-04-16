import { useParams } from 'react-router-dom'
import { useProductPageData } from '../../hooks/useProductPageData'
import { Loader } from '../../shared/ui/loader/Loader'
import { Error } from '../../shared/ui/error/Error'
import { ProductCard } from './components/ProductCard/ProductCard'

import styles from './ProductPage.module.css'

export function ProductPage() {
  const { id } = useParams()
  const { product, category, sizes, isLoading, error } = useProductPageData(id)

  let content = null

  if (isLoading) {
    content = <Loader text="Loading product card..." />
  } else if (error) {
    content = <Error error={error} message="Product does not exist" />
  } else {
    content = <ProductCard product={product} category={category} sizes={sizes} />
  }

  return <div className={styles.page}>{content}</div>
}
