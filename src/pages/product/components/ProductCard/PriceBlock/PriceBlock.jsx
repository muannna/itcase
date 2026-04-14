import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { formatPrice } from '../../../../../utils/formatPrice'
import { Button } from '../../../../../shared/ui/button/Button'
import { addItem } from '../../../../../app/store/cart/cartSlice'

import styles from './PriceBlock.module.css'

export function PriceBlock({ selectedColor, selectedSize, availableSizes, productId }) {
  const [touched, setTouched] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    setTouched(false)
  }, [selectedColor, selectedSize])

  const addToCart = () => {
    setTouched(true)
    if (!selectedSize) return

    dispatch(addItem({ productId, colorId: selectedColor.id, sizeId: selectedSize }))
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
