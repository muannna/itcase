import { useFilters } from '../../../../hooks/useFilters'

export function ResetFiltersButton() {
  const { filters, resetFilters } = useFilters()

  const isDefault = filters.search === '' && filters.sort === 'default' && filters.inStock === false

  return (
    <button onClick={resetFilters} disabled={isDefault}>
      Clear filters
    </button>
  )
}
