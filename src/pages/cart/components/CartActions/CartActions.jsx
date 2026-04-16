import { Button } from '../../../../shared/ui/button/Button'

export function CartActions({ removeAllFromCart }) {
  return <Button onClick={removeAllFromCart}>Clear cart</Button>
}
