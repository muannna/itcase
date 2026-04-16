import { Button } from '../../../../shared/ui/button/Button'

import styles from './ColorSelector.module.css'

export function ColorSelector({ product, setColor, selectedColor }) {
  return (
    <div className={styles.color}>
      <p className={styles.label}>Color:</p>
      <div className={styles.colorRow}>
        {product.colors.map((color) => (
          <Button
            key={color.id}
            onClick={() => setColor(color.id)}
            isActive={color.id === selectedColor.id}
          >
            {color.name}
          </Button>
        ))}
      </div>
    </div>
  )
}
