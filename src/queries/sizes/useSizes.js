import { useQuery } from '@tanstack/react-query'
import { getSizes } from '../../services/api'
import { sizesKeys } from '../queryKeys'

export function useSizes() {
  return useQuery({
    queryKey: sizesKeys.all,
    queryFn: getSizes,
  })
}
