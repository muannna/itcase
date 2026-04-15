import { formatPrice } from '../../../../../utils/formatPrice'

export function CartItemMessage({ item }) {
  return (
    <div>
      {item.isPriceChanged && (
        <p style={{ color: 'orange' }}>Price changed was {formatPrice(item.priceAtAdd)} </p>
      )}
      {!item.product && <p style={{ color: 'red' }}>Product is no longer available</p>}
    </div>
  )
}
