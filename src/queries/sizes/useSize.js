import { useQuery } from '@tanstack/react-query'
import { getSize } from '../../services/api'
import { QUERY_KEYS } from '../queryKeys'

export function useSize(id) {
  return useQuery({
    queryKey: [QUERY_KEYS.SIZE, id],
    queryFn: () => getSize(id),
    enabled: !!id,
  })
}
