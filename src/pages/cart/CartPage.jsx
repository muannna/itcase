import { useCartViewModel } from '../../hooks/cart/useCartViewModel'
import { formatPrice } from '../../utils/formatPrice'
import { Loader } from '../../shared/ui/loader/Loader'
import { Error } from '../../shared/ui/error/Error'
import { EmptyState } from '../../shared/ui/emptyState/EmptyState'

export function CartPage() {
  const {
    isLoading,
    error,
    enrichedCart,
    total,
    totalQuantity,
    validTotalQuantity,
    removeAllFromCart,
    isEmpty,
  } = useCartViewModel()

  let content = null

  if (isLoading) {
    content = <Loader text="Loading cart..." />
  } else if (error) {
    content = <Error error={error} message="Error loading products" />
  } else if (isEmpty) {
    content = <EmptyState text="Your shopping cart is currently empty." />
  } else {
    content = (
      <>
        <ul>
          {enrichedCart.map((item) => (
            <li key={item.id}>
              <img src={item.image} width={80} alt={item.productNameAtAdd} />
              <p>
                {item.product?.name ?? item.productNameAtAdd}{' '}
                {item.product?.brand ?? item.productBrandAtAdd}
              </p>
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
              <p>Quantity: {item.quantity}</p>
              {item.isPriceChanged && (
                <p style={{ color: 'orange' }}>Price changed was {formatPrice(item.priceAtAdd)} </p>
              )}
              {item.isValid && (
                <p>
                  Total: {formatPrice(item.currentPrice)} x {item.quantity} ={' '}
                  {formatPrice(item.currentPrice * item.quantity)}
                </p>
              )}
              {!item.product && <p style={{ color: 'red' }}>Product is no longer available</p>}
            </li>
          ))}
        </ul>
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
        <button onClick={removeAllFromCart}>Clear cart</button>
      </>
    )
  }

  return (
    <div>
      <h1>Cart</h1>
      {content}
    </div>
  )
}
