import { CartItem } from '../CartItem/CartItem'

export function CartList({ items, title }) {
  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  )
}
