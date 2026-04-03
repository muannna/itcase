import { useQuery } from '@tanstack/react-query'
import { getProducts } from '../../services/api'
import { QUERY_KEYS } from '../queryKeys'

export function useProducts() {
  return useQuery({
    queryKey: QUERY_KEYS.PRODUCTS,
    queryFn: getProducts,
  })
}
