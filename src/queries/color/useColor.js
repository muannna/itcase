import { useQuery } from '@tanstack/react-query'
import { getProductColor } from '../../services/api'
import { QUERY_KEYS } from '../queryKeys'

export function useColor(productID, colorID) {
  return useQuery({
    queryKey: [QUERY_KEYS.COLOR, productID, colorID],
    queryFn: () => getProductColor(productID, colorID),
    enabled: !!productID && !!colorID,
  })
}
