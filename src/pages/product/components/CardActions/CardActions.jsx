import { AddToCart } from './AddToCart'
import { AddFakeProducts } from './AddFakeProducts'

import styles from './CardActions.module.css'

export function CardActions({ onAdd, onAddFake, disabled, isInCart, quantity }) {
  return (
    <div className={styles.buttonsContainer}>
      <AddToCart disabled={disabled} onAdd={onAdd} isInCart={isInCart} quantity={quantity} />
      <AddFakeProducts onAddFake={onAddFake} />
    </div>
  )
}
