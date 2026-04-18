import { useQuery } from '@tanstack/react-query'
import { getProductColor } from '../../services/api'
import { colorsKeys } from '../queryKeys'

export function useColor(productID, colorID) {
  return useQuery({
    queryKey: colorsKeys.product(productID, colorID),
    queryFn: () => getProductColor(productID, colorID),
    enabled: !!productID && !!colorID,
  })
}
