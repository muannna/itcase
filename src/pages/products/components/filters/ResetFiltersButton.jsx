import { useFilters } from '../../../../hooks/useFilters'
import { Button } from '../../../../shared/ui/button/Button'

export function ResetFiltersButton() {
  const { filters, resetFilters } = useFilters()

  const isDefault = filters.search === '' && filters.sort === 'default' && filters.inStock === false

  return (
    <Button onClick={resetFilters} disabled={isDefault}>
      Clear filters
    </Button>
  )
}
