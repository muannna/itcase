import { Button } from '../../../../shared/ui/button/Button'

import styles from './AddToCart.module.css'

export function AddToCart({ onAdd, disabled, isInCart, quantity }) {
  return (
    <div className={styles.wrapper}>
      <Button isCart={true} disabled={disabled} onClick={onAdd}>
        <span>{isInCart ? 'Add more' : 'Add to cart'}</span>
      </Button>
      {isInCart && <span className={styles.subtext}>In cart: {quantity}</span>}
    </div>
  )
}
