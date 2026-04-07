export function Error({ error, message = 'Something went wrong' }) {
  return <p>{`${message}: ${error.message}`}</p>
}
