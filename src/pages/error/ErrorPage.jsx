import { useRouteError } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Error } from '../../shared/ui/error/Error'

export function ErrorPage() {
  const error = useRouteError()
  const navigate = useNavigate()

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <Error error={error} />
      <button onClick={() => navigate('/')}>Go home</button>
    </div>
  )
}
