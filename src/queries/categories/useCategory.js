import { useQuery } from '@tanstack/react-query'
import { getCategory } from '../../services/api'
import { QUERY_KEYS } from '../queryKeys'

export function useCategory(id) {
  return useQuery({
    queryKey: [QUERY_KEYS.CATEGORY, id],
    queryFn: () => getCategory(id),
    enabled: !!id,
  })
}
