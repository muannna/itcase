import { Button } from '../../../../shared/ui/button/Button'

import styles from './SizeSelector.module.css'

export function SizeSelector({ sizes, availableSizes, setSize, selectedSize }) {
  return (
    <div className={styles.size}>
      <p className={styles.label}>Size:</p>
      <div className={styles.sizeRow}>
        {sizes.map((size) => {
          const isAvailable = availableSizes.has(size.id)
          return (
            <Button
              key={size.id}
              onClick={() => {
                if (!isAvailable) return
                setSize(size.id)
              }}
              isActive={selectedSize === size.id}
              isAvailable={isAvailable}
            >
              {size.name} ({size.number})
            </Button>
          )
        })}
      </div>
    </div>
  )
}
