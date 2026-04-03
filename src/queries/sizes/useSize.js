import { useQuery } from '@tanstack/react-query'
import { getSize } from '../../services/api'
import { QUERY_KEYS } from '../queryKeys'

export function useSize(id) {
  if (!id) {
    throw new Error('useSize: id is required')
  }
  return useQuery({
    queryKey: [QUERY_KEYS.SIZE, id],
    queryFn: () => getSize(id),
    enabled: !!id,
  })
}
