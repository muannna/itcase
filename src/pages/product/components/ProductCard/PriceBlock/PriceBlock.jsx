import { formatPrice } from '../../../../../utils/formatPrice'
import { Button } from '../../../../../shared/ui/button/Button'

export function PriceBlock({ selectedColor }) {
  return (
    <div>
      <p>{formatPrice(selectedColor.price)}</p>
      <Button>Add to cart</Button>
    </div>
  )
}
