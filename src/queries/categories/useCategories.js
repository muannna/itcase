import { useQuery } from '@tanstack/react-query'
import { getCategories } from '../../services/api'
import { QUERY_KEYS } from '../queryKeys'

export function useCategories() {
  return useQuery({
    queryKey: QUERY_KEYS.CATEGORIES,
    queryFn: getCategories,
  })
}
