const CART_KEY = 'cart'

export const loadCart = () => {
  const rawData = localStorage.getItem(CART_KEY)
  if (!rawData) return []
  try {
    const parsedData = JSON.parse(rawData)
    return Array.isArray(parsedData) ? parsedData : []
  } catch {
    return []
  }
}

export const saveCart = (cart) => {
  localStorage.setItem(CART_KEY, JSON.stringify(cart))
}
