export function CartItemSize({ item }) {
  return (
    <p>
      Size:{' '}
      {item.size ? (
        <>
          {item.size.name} ({item.size.number})
          {!item.isSizeAvailable && <span style={{ color: 'orange' }}> unavailable</span>}
        </>
      ) : (
        <span style={{ color: 'orange' }}>{item.sizeNameAtAdd} (deleted)</span>
      )}
    </p>
  )
}
