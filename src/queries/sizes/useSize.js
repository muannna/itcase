import { useQuery } from '@tanstack/react-query'
import { getSize } from '../../services/api'
import { sizesKeys } from '../queryKeys'

export function useSize(id) {
  return useQuery({
    queryKey: sizesKeys.detail(id),
    queryFn: () => getSize(id),
    enabled: !!id,
  })
}
