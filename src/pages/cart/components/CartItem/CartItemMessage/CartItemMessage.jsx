import { getCartItemMessages } from '../../../../../utils/getCartItemMessage'

import styles from './CartItemMessage.module.css'

export function CartItemMessage({ item }) {
  const messages = getCartItemMessages(item)
  if (!messages.length) return null

  return (
    <div className={styles.message}>
      {messages.map((msg, index) => (
        <p key={index} className={msg.type === 'error' ? styles.error : styles.warning}>
          {msg.text}
        </p>
      ))}
    </div>
  )
}
