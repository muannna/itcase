export function InStockCheckbox({ checked, onChange }) {
  return (
    <>
      <input
        id="in-stock"
        name="inStock"
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <label htmlFor="in-stock">In Stock Only</label>
    </>
  )
}
