import { useQuery } from '@tanstack/react-query'
import { getProduct } from '../../services/api'
import { QUERY_KEYS } from '../queryKeys'

export function useProduct(id) {
  if (!id) {
    throw new Error('useProduct: id is required')
  }
  return useQuery({
    queryKey: [QUERY_KEYS.PRODUCT, id],
    queryFn: () => getProduct(id),
    enabled: !!id,
  })
}
