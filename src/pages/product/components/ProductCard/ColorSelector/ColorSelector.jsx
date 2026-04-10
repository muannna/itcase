import { Button } from '../../../../../shared/ui/button/Button'

export function ColorSelector({ product, setColor, selectedColor }) {
  return (
    <ul>
      {product.colors.map((color) => (
        <Button
          key={color.id}
          onClick={() => setColor(color.id)}
          style={{
            fontWeight: color.id === selectedColor.id ? 'bold' : 'normal',
          }}
        >
          {color.name}
        </Button>
      ))}
    </ul>
  )
}
