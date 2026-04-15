import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { selectCartItems, selectCartCount } from '../../app/store/cart/selectors'
import { formatPrice } from '../../utils/formatPrice'
import { useProducts } from '../../queries/products/useProducts'
import { useSizes } from '../../queries/sizes/useSizes'
import { Loader } from '../../shared/ui/loader/Loader'
import { Error } from '../../shared/ui/error/Error'
import { EmptyState } from '../../shared/ui/emptyState/EmptyState'
import { clearCart } from '../../app/store/cart/cartSlice'

export function CartPage() {
  const dispatch = useDispatch()
  const cart = useSelector(selectCartItems)
  const totalQuantity = useSelector(selectCartCount)
  const { data: products = [], isLoading: isProductsLoading, error: productsError } = useProducts()
  const { data: sizes = [], isLoading: isSizesLoading, error: sizesError } = useSizes()
  const isLoading = isProductsLoading || isSizesLoading
  const error = productsError || sizesError

  const sizeMap = Object.fromEntries(sizes.map((size) => [size.id, size]))
  const productMap = Object.fromEntries(products.map((product) => [product.id, product]))

  const enrichedCart = cart.map((item) => {
    const product = productMap[item.productId] || null
    const color = product?.colors.find((color) => color.id === item.colorId) || null
    const isSizeAvailable = color?.sizes?.includes(item.sizeId) ?? false
    const size = sizeMap[item.sizeId] || null
    const currentPrice = color?.price ?? null
    const isPriceChanged = color?.price != null && color.price !== item.priceAtAdd
    const isValid = Boolean(color && size && isSizeAvailable)

    return {
      ...item,
      product,
      color,
      size,
      isSizeAvailable,
      currentPrice,
      isPriceChanged,
      isValid,
    }
  })

  const validItems = enrichedCart.filter((item) => item.isValid)
  const totalValue = validItems.reduce((sum, item) => {
    return sum + item.currentPrice * item.quantity
  }, 0)
  const total = formatPrice(totalValue)
  const validTotalQuantity = validItems.reduce((sum, item) => {
    return sum + item.quantity
  }, 0)

  const removeAllFromCart = () => {
    dispatch(clearCart())
  }

  let content = null

  if (isLoading) {
    content = <Loader text="Loading cart..." />
  } else if (error) {
    content = <Error error={error} message="Error loading products" />
  } else if (!cart.length) {
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
