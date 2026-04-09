import styles from './EmptyState.module.css'

export function EmptyState({ text = 'Nothing found' }) {
  return <p className={styles.emptyState}>{text}</p>
}
