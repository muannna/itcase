import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '../../shared/layout/Layout'
import { ProductsPage } from '../../pages/products/ProductsPage'
import { ProductPage } from '../../pages/product/ProductPage'
import { CartPage } from '../../pages/cart/CartPage'
import { ErrorPage } from '../../pages/error/ErrorPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <ProductsPage />,
      },
      {
        path: 'product/:id',
        element: <ProductPage />,
      },
      {
        path: 'cart',
        element: <CartPage />,
      },
    ],
  },
])
