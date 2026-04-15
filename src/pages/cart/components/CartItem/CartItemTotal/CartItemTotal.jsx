import { formatPrice } from '../../../../../utils/formatPrice'

export function CartItemTotal({ item }) {
  return (
    <div>
      {item.isValid && (
        <p>
          Total: {formatPrice(item.currentPrice)} x {item.quantity} ={' '}
          {formatPrice(item.currentPrice * item.quantity)}
        </p>
      )}
    </div>
  )
}
