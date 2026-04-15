import { Outlet, Link } from 'react-router-dom'
import { ThemeToggle } from '../ui/themeToggle/ThemeToggle'
import { CartLink } from '../ui/cartLink/CartLink'

import styles from './Layout.module.css'

export function Layout() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.navWrapper}>
        <nav className={styles.nav}>
          <div className={styles.left}>
            <Link className={styles.homeLink} to="/">
              Products
            </Link>
          </div>
          <div className={styles.right}>
            <ThemeToggle />
            <CartLink />
          </div>
        </nav>
      </div>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  )
}
