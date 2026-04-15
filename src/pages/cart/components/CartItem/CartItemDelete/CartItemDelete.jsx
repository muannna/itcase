import { useDispatch } from 'react-redux'
import { removeItem } from '../../../../../app/store/cart/cartSlice'

import styles from './CartItemDelete.module.css'

export function CartItemDelete({ item }) {
  const dispatch = useDispatch()

  const deleteItem = () => {
    dispatch(removeItem(item.id))
  }

  return (
    <button type="button" onClick={deleteItem} className={styles.deleteButton}>
      <img src="/icons/TrashIcon.svg" alt="Delete item" />
    </button>
  )
}
