import { useState, useEffect } from 'react'
import { formatPrice } from '../../../../utils/formatPrice'
import { useCartActions } from '../../../../hooks/cart/useCartActions'
import { CardActions } from '../CardActions/CardActions'
import { useCartItem } from '../../../../hooks/cart/useCartItem.js'

import styles from './PriceBlock.module.css'

export function PriceBlock({ selectedColor, selectedSize, availableSizes, product, sizes }) {
  const [touched, setTouched] = useState(false)
  const { addToCart, addFakeToCart } = useCartActions()
  const formatedPrice = formatPrice(selectedColor.price)
  const { isInCart, quantity } = useCartItem({
    productId: product.id,
    colorId: selectedColor.id,
    sizeId: selectedSize,
  })
  const selectedSizeObject = sizes.find((size) => size.id === selectedSize) ?? null

  const handleAdd = () => {
    setTouched(true)
    if (!selectedSizeObject) return
    addToCart({
      productId: product.id,
      productNameAtAdd: product.name,
      productBrandAtAdd: product.brand,
      color: selectedColor,
      size: selectedSizeObject,
    })
  }

  useEffect(() => {
    setTouched(false)
  }, [selectedColor, selectedSize])

  return (
    <div className={styles.priceBlock}>
      <p className={styles.price}>{formatedPrice}</p>
      <p className={`${styles.error} ${touched && !selectedSize ? styles.visible : ''}`}>
        Please select size
      </p>
      <CardActions
        onAdd={handleAdd}
        onAddFake={addFakeToCart}
        disabled={!availableSizes.size}
        isInCart={isInCart}
        quantity={quantity}
      />
    </div>
  )
}
