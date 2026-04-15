export function CartItemColor({ item }) {
  return (
    <p>
      Color:{' '}
      {item.color ? (
        item.color.name
      ) : (
        <>
          {item.colorNameAtAdd}
          <span style={{ color: 'orange' }}> unavailable</span>
        </>
      )}
    </p>
  )
}
