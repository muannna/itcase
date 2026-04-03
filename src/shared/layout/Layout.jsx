import { Outlet, Link } from 'react-router-dom'

export function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Products</Link>
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
