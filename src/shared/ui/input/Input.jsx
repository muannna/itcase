import styles from './Input.module.css'

export function Input({ id, name, type = 'text', placeholder, value, onChange }) {
  const handleChange = (e) => {
    onChange(e.target.value)
  }

  return (
    <input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      className={styles.input}
    />
  )
}
