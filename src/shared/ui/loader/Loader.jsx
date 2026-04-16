import styles from './Loader.module.css'

export function Loader({ text = 'Loading...' }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.dots}>
        <span />
        <span />
        <span />
      </div>
      <p className={styles.loaderText}>{text}</p>
    </div>
  )
}
