import styles from './SearchInput.module.css'

export function SearchInput({ value, onChange }) {
  return (
    <input
      id="search"
      name="search"
      type="text"
      placeholder="Search products..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={styles.input}
    />
  )
}
