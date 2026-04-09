import { Link } from 'react-router-dom'
import { memo } from 'react'
import { getCheapestColor } from '../../../../../utils/getSortedAvailableColors'
import { formatPrice } from '../../../../../utils/formatPrice'

import styles from './ProductCard.module.css'

const ProductCardComponent = ({ product }) => {
  const cheapestColor = getCheapestColor(product.colors)

  return (
    <Link to={`/product/${product.id}`} className={styles.card}>
      <img src={cheapestColor.images[0]} alt={product.name} className={styles.image} />
      <p className={styles.price}>Price: {formatPrice(cheapestColor.price)}</p>
      <h3 className={styles.title}>{product.name}</h3>
      <p className={styles.brand}>{product.brand}</p>
    </Link>
  )
}

export const ProductCard = memo(ProductCardComponent)
