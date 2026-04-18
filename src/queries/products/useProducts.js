import { useQuery } from '@tanstack/react-query'
import { getProducts } from '../../services/api'
import { productsKeys } from '../queryKeys'

export function useProducts() {
  return useQuery({
    queryKey: productsKeys.all,
    queryFn: getProducts,
  })
}
