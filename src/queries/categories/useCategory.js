import { useQuery } from '@tanstack/react-query'
import { getCategory } from '../../services/api'
import { categoriesKeys } from '../queryKeys'

export function useCategory(id) {
  return useQuery({
    queryKey: categoriesKeys.detail(id),
    queryFn: () => getCategory(id),
    enabled: !!id,
  })
}
