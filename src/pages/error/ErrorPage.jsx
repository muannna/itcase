import { useRouteError } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export function ErrorPage() {
  const error = useRouteError()
  const navigate = useNavigate()

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message || 'Unknown error'}</i>
      </p>
      <button onClick={() => navigate('/')}>Go home</button>
    </div>
  )
}
