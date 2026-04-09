import { useRouteError } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Error } from '../../shared/ui/error/Error'
import { Button } from '../../shared/ui/button/Button'

import styles from './ErrorPage.module.css'

export function ErrorPage() {
  const error = useRouteError()
  const navigate = useNavigate()

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Oops!</h1>
      <p className={styles.subtitle}>Sorry, an unexpected error has occurred.</p>
      <Error error={error} />
      <Button onClick={() => navigate('/')}>Go home</Button>
    </div>
  )
}
