import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { selectCartItems } from '../../app/store/cart/selectors'
import { formatPrice } from '../../utils/formatPrice'
import { useProducts } from '../../queries/products/useProducts'
import { Loader } from '../../shared/ui/loader/Loader'
import { Error } from '../../shared/ui/error/Error'
import { EmptyState } from '../../shared/ui/emptyState/EmptyState'
import { clearCart } from '../../app/store/cart/cartSlice'

export function CartPage() {
  const dispatch = useDispatch()
  const cart = useSelector(selectCartItems)
  const { data: products = [], isLoading, error } = useProducts()

  const enrichedCart = cart.map((item) => {
    const product = products.find((p) => p.id === item.productId)

    if (!product) {
      return {
        ...item,
        product: null,
        issues: ['product_missing'],
      }
    }

    const color = product.colors.find((color) => color.id === item.colorId)
    const size = color?.sizes?.find((size) => size === item.sizeId)

    const issues = []

    if (!color) issues.push('color_missing')
    if (color && !size) issues.push('size_missing')

    const isPriceChanged = color.price !== item.priceAtAdd
    if (isPriceChanged) issues.push('price_changed')

    return {
      ...item,
      product,
      issues,
      isPriceChanged,
      color,
    }
  })

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
              <img src={item.image} width={80} alt={item.productName} />
              <p>
                {item.productName} {item.productBrand}
              </p>
              {item.issues.includes('color_missing') ? (
                <p style={{ color: 'orange' }}>Color has changed: unavailable</p>
              ) : (
                <p>Color: {item.color.name}</p>
              )}
              {item.issues.includes('size_missing') ? (
                <p style={{ color: 'orange' }}>Size has changed: unavailable</p>
              ) : (
                <p>Size: {item.sizeId}</p>
              )}
              {item.issues.includes('product_missing') && (
                <p style={{ color: 'red' }}>Product is no longer available</p>
              )}
              <p>Quantity: {item.quantity}</p>
              {item.issues.includes('price_changed') && (
                <p style={{ color: 'orange' }}>
                  Price has changed (was {formatPrice(item.priceAtAdd)})
                </p>
              )}
              {item.product && item.color && (
                <p>
                  Total: {formatPrice(item.color.price)} x {item.quantity} ={' '}
                  {formatPrice(item.color.price * item.quantity)}
                </p>
              )}
            </li>
          ))}
        </ul>
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
