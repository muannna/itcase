import { useQuery } from '@tanstack/react-query'
import { getProduct } from '../../services/api'
import { QUERY_KEYS } from '../queryKeys'

export function useProduct(id) {
  return useQuery({
    queryKey: QUERY_KEYS.PRODUCT(id),
    queryFn: () => getProduct(id),
    enabled: !!id,
  })
}
