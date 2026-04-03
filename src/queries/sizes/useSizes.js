import { useQuery } from '@tanstack/react-query'
import { getSizes } from '../../services/api'
import { QUERY_KEYS } from '../queryKeys'

export function useSizes() {
  return useQuery({
    queryKey: QUERY_KEYS.SIZES,
    queryFn: getSizes,
  })
}
