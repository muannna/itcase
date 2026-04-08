import { Outlet, Link } from 'react-router-dom'
import { ThemeToggle } from '../ui/themeToggle/ThemeToggle'

import styles from './Layout.module.css'

export function Layout() {
  return (
    <div>
      <nav className={styles.nav}>
        <div className={styles.left}>
          <Link className={styles.homeLink} to="/">
            Products
          </Link>
        </div>

        <div className={styles.right}>
          <ThemeToggle />
          <Link to="/cart">Cart</Link>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
