export function SearchInput({ value, onChange }) {
  return (
    <input
      id="search"
      name="search"
      type="text"
      placeholder="Search products..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}
