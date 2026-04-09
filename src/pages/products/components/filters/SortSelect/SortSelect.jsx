import styles from './SortSelect.module.css'

export function SortSelect({ value, onChange }) {
  return (
    <div className={styles.selectWrapper}>
      <select
        className={styles.select}
        id="sort"
        name="sort"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="default">Default</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
      </select>
    </div>
  )
}
