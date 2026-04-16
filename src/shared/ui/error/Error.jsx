import { useNavigate } from 'react-router-dom'
import { Button } from '../button/Button'

import styles from './Error.module.css'

export function Error({ error, message }) {
  const navigate = useNavigate()

  return (
    <div className={styles.errorContainer}>
      <p className={styles.error}>{`${error.statusText || message || 'Something went wrong'}`}</p>
      <Button onClick={() => navigate('/')}>Go home</Button>
    </div>
  )
}
