import { useSearchParams } from 'react-router-dom'

export function useFilters() {
  const [searchParams, setSearchParams] = useSearchParams()

  const filters = {
    search: searchParams.get('search') || '',
    inStock: searchParams.get('inStock') === 'true',
    sort: searchParams.get('sort') || 'default',
  }

  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams)
    if (!value || value === 'default') {
      newParams.delete(key)
    } else {
      newParams.set(key, value)
    }
    setSearchParams(newParams)
  }

  return { filters, updateFilter }
}
