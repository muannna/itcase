import { Button } from '../../../../shared/ui/button/Button'

export function AddToCart({ onAdd, disabled }) {
  return (
    <Button isCart={true} disabled={disabled} onClick={onAdd}>
      Add to cart
    </Button>
  )
}
