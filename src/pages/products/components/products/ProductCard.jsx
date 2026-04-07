import { Link } from 'react-router-dom'
import { memo } from 'react'
import { getCheapestColor } from '../../../../utils/getSortedAvailableColors'
import { formatPrice } from '../../../../utils/formatPrice'

const ProductCardComponent = ({ product }) => {
  const cheapestColor = getCheapestColor(product.colors)

  return (
    <Link to={`/product/${product.id}`}>
      <img src={cheapestColor.images[0]} alt={product.name} width={200} height={200} />
      <p>Price: {formatPrice(cheapestColor.price)}</p>
      <h3>{product.name}</h3>
      <p>{product.brand}</p>
    </Link>
  )
}

export const ProductCard = memo(ProductCardComponent)
