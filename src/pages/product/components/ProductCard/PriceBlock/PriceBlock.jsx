import { useState } from 'react'
import { formatPrice } from '../../../../../utils/formatPrice'
import { Button } from '../../../../../shared/ui/button/Button'

import styles from './PriceBlock.module.css'

export function PriceBlock({ selectedColor, selectedSize, availableSizes }) {
  const [touched, setTouched] = useState(false)
  const addToCart = () => {
    setTouched(true)
    if (!selectedSize) return
  }
  return (
    <div className={styles.priceBlock}>
      <p className={styles.price}>{formatPrice(selectedColor.price)}</p>
      <p className={`${styles.error} ${touched && !selectedSize ? styles.visible : ''}`}>
        Please select size
      </p>
      <Button isCart={true} disabled={!availableSizes.size} onClick={addToCart}>
        Add to cart
      </Button>
    </div>
  )
}
