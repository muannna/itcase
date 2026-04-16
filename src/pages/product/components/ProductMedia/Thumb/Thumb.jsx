import styles from './Thumb.module.css'

export function Thumb({ img, isActive, onClick, name }) {
  const classes = [styles.thumb, isActive ? styles.active : ''].filter(Boolean).join(' ')

  return (
    <button onClick={onClick} className={classes} disabled={isActive}>
      <img src={img} alt={name} className={styles.thumbImg} />
    </button>
  )
}
