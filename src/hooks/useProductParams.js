import { useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'
import { normalizeParams } from '../utils/normalizeParams'
import { deriveProductState } from '../utils/deriveProductState'

export function useProductParams(product) {
  const [searchParams, setSearchParams] = useSearchParams()

  const { selectedColor, selectedSize } = deriveProductState(product, searchParams)

  useEffect(() => {
    const { newParams, changed } = normalizeParams(product, searchParams, selectedColor)

    if (changed) {
      setSearchParams(newParams, { replace: true })
    }
  }, [product, searchParams, setSearchParams, selectedColor])

  const setColor = (colorId) => {
    const newParams = new URLSearchParams(searchParams)
    newParams.set('color', colorId)
    setSearchParams(newParams, { replace: true })
  }

  const setSize = (sizeId) => {
    const newParams = new URLSearchParams(searchParams)
    newParams.set('size', sizeId)
    setSearchParams(newParams, { replace: true })
  }

  return {
    selectedColor,
    selectedSize,
    setColor,
    setSize,
  }
}
