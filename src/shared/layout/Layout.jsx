import { Outlet, Link } from 'react-router-dom'
import { ThemeToggle } from '../ui/themeToggle/ThemeToggle'

export function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Products</Link>
          </li>
          <li>
            <ThemeToggle />
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
