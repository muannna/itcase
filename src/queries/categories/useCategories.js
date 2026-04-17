import { useQuery } from '@tanstack/react-query'
import { getCategories } from '../../services/api'
import { categoriesKeys } from '../queryKeys'

export function useCategories() {
  return useQuery({
    queryKey: categoriesKeys.all,
    queryFn: getCategories,
  })
}
