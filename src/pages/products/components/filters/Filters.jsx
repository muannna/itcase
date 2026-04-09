import { SearchInput } from './SearchInput/SearchInput'
import { SortSelect } from './SortSelect/SortSelect'
import { InStockCheckbox } from './InStockCheckbox/InStockCheckbox'
import { ResetFiltersButton } from './ResetFiltersButton/ResetFiltersButton'

import styles from './Filters.module.css'

export function Filters({ filters, updateFilter }) {
  return (
    <div className={styles.filters}>
      <div className={styles.leftSide}>
        <SearchInput value={filters.search} onChange={(value) => updateFilter('search', value)} />
        <SortSelect value={filters.sort} onChange={(value) => updateFilter('sort', value)} />
        <InStockCheckbox
          checked={filters.inStock}
          onChange={(value) => updateFilter('inStock', value ? 'true' : null)}
        />
      </div>
      <div className={styles.rightSide}>
        <ResetFiltersButton />
      </div>
    </div>
  )
}
