import { useDispatch } from 'react-redux'
import {
  incrementItemQuantity,
  decrementItemQuantity,
} from '../../../../../app/store/cart/cartSlice'
import { Button } from '../../../../../shared/ui/button/Button'

import styles from './CartItemQuantity.module.css'

export function CartItemQuantity({ item }) {
  const dispatch = useDispatch()
  if (!item.isValid) {
    return (
      <p>
        <span className={styles.labelInvalid}>Quantity: </span> {item.quantity}
      </p>
    )
  }

  return (
    <div className={styles.wrapper}>
      <span className={styles.label}>Quantity</span>
      <div className={styles.stepper}>
        <Button
          isCart
          onClick={() => dispatch(decrementItemQuantity(item.id))}
          disabled={item.quantity === 1}
        >
          −
        </Button>
        <span className={styles.value}>{item.quantity}</span>
        <Button isCart onClick={() => dispatch(incrementItemQuantity(item.id))}>
          +
        </Button>
      </div>
    </div>
  )
}
