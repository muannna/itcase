const CART_KEY = 'cart'
const PROMO_KEY = 'promo'

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

export const loadPromo = () => {
  const rawData = localStorage.getItem(PROMO_KEY)
  if (!rawData) return []
  try {
    const parsedData = JSON.parse(rawData)
    return parsedData ? parsedData : null
  } catch {
    return null
  }
}

export const savePromo = (promo) => {
  localStorage.setItem(PROMO_KEY, JSON.stringify(promo))
}

export const clearPromoStorage = () => {
  localStorage.removeItem(PROMO_KEY)
}
