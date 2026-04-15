import { useState, useEffect } from 'react'
import { formatPrice } from '../../../../utils/formatPrice'
import { useCartActions } from '../../../../hooks/cart/useCartActions'
import { CardActions } from '../CardActions/CardActions'

import styles from './PriceBlock.module.css'

export function PriceBlock({ selectedColor, selectedSize, availableSizes, product }) {
  const [touched, setTouched] = useState(false)
  const { addToCart, addFakeToCart } = useCartActions()
  const formatedPrice = formatPrice(selectedColor.price)

  const handleAdd = () =>
    addToCart({
      product,
      selectedColor,
      selectedSize,
      setTouched,
    })

  useEffect(() => {
    setTouched(false)
  }, [selectedColor, selectedSize])

  return (
    <div className={styles.priceBlock}>
      <p className={styles.price}>{formatedPrice}</p>
      <p className={`${styles.error} ${touched && !selectedSize ? styles.visible : ''}`}>
        Please select size
      </p>
      <CardActions onAdd={handleAdd} onAddFake={addFakeToCart} disabled={!availableSizes.size} />
    </div>
  )
}
