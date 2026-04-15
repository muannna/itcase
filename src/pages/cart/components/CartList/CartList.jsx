import { CartItem } from '../CartItem/CartItem'

export function CartList({ items }) {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  )
}
