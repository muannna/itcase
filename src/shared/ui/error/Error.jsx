export function Error({ error, message }) {
  return (
    <p>{`${error.statusText || message || 'Something went wrong'}: ${error.message || 'Unknown error'}`}</p>
  )
}
