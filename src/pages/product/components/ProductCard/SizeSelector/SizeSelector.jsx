export function SizeSelector({ sizes, availableSizes, setSize, selectedSize }) {
  return (
    <ul>
      {sizes.map((size) => {
        const isAvailable = availableSizes.has(size.id)
        return (
          <li
            key={size.id}
            onClick={() => {
              if (!isAvailable) return
              setSize(size.id)
            }}
            style={{
              opacity: isAvailable ? 1 : 0.3,
              fontWeight: selectedSize === size.id ? 'bold' : 'normal',
            }}
          >
            {size.name} ({size.number})
          </li>
        )
      })}
    </ul>
  )
}
