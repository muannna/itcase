import styles from './Error.module.css'

export function Error({ error, message }) {
  return (
    <p className={styles.error}>{`${error.statusText || message || 'Something went wrong'}`}</p>
  )
}
