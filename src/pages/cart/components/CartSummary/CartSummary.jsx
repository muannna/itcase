export function CartSummary({ total, totalQuantity, validTotalQuantity }) {
  return (
    <>
      {totalQuantity !== validTotalQuantity ? (
        <div style={{ color: 'orange' }}>
          <p>Some items are unavailable and excluded from total</p>
          <p>
            {' '}
            Available for purchase: {validTotalQuantity} of {totalQuantity}
          </p>
        </div>
      ) : (
        <p>Total items in cart: {totalQuantity}</p>
      )}
      <p>Total: {total}</p>
    </>
  )
}
