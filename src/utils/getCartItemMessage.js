import { formatPrice } from './formatPrice'

export function getCartItemMessages(item) {
  const messages = []
  if (item.isPriceChanged) {
    messages.push({ text: `Price changed (was ${formatPrice(item.priceAtAdd)})`, type: 'warning' })
  }
  if (!item.product) {
    messages.push({ text: 'Product is no longer available', type: 'error' })
  }

  return messages
}
