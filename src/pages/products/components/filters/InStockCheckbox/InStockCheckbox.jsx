import styles from './InStockCheckbox.module.css'

export function InStockCheckbox({ checked, onChange }) {
  return (
    <label className={styles.wrapper}>
      <input
        name="inStock"
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className={styles.checkbox}
      />
      <span className={styles.label}>In Stock Only</span>
    </label>
  )
}
