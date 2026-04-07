export function InStockCheckbox({ checked, onChange }) {
  return (
    <label>
      <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} />
      In Stock Only
    </label>
  )
}
