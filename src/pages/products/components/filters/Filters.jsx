import { SearchInput } from './SearchInput'
import { SortSelect } from './SortSelect'
import { InStockCheckbox } from './InStockCheckbox'
import { ResetFiltersButton } from './ResetFiltersButton'

export function Filters({ filters, updateFilter }) {
  return (
    <div>
      <SearchInput value={filters.search} onChange={(value) => updateFilter('search', value)} />
      <SortSelect value={filters.sort} onChange={(value) => updateFilter('sort', value)} />
      <InStockCheckbox
        checked={filters.inStock}
        onChange={(value) => updateFilter('inStock', value ? 'true' : null)}
      />
      <ResetFiltersButton />
    </div>
  )
}
