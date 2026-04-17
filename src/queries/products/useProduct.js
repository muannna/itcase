import { useQuery } from '@tanstack/react-query'
import { getProduct } from '../../services/api'
import { productsKeys } from '../queryKeys'

export function useProduct(id) {
  return useQuery({
    queryKey: productsKeys.detail(id),
    queryFn: () => getProduct(id),
    enabled: !!id,
  })
}
