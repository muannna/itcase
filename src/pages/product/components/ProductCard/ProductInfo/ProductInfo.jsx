import styles from './ProductInfo.module.css'

export function ProductInfo({ category, selectedColor }) {
  return (
    <div className={styles.description}>
      <h3 className={styles.title}>Description</h3>
      <p>
        <span className={styles.label}>Category:</span> {category?.name}
      </p>
      <p>
        <span className={styles.label}>About product:</span> {selectedColor.description}
      </p>
      <p>
        <span className={styles.label}>Color:</span> {selectedColor.name}
      </p>
    </div>
  )
}
