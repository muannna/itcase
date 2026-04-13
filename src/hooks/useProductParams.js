import { useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'
import { normalizeParams } from '../utils/normalizeParams'
import { deriveProductState } from '../utils/deriveProductState'

export function useProductParams(product) {
  const [searchParams, setSearchParams] = useSearchParams()

  const updateParams = (updater) => {
    const newParams = new URLSearchParams(searchParams)
    updater(newParams)
    setSearchParams(newParams, { replace: true })
  }

  const { selectedColor, selectedSize } = deriveProductState(product, searchParams)

  useEffect(() => {
    const { newParams, changed } = normalizeParams(product, searchParams)

    if (changed) {
      setSearchParams(newParams, { replace: true })
    }
  }, [product, searchParams, setSearchParams])

  const setColor = (colorId) => {
    updateParams((newParams) => {
      newParams.set('color', colorId)
    })
  }

  const setSize = (sizeId) => {
    updateParams((newParams) => {
      newParams.set('size', sizeId)
    })
  }

  return {
    selectedColor,
    selectedSize,
    setColor,
    setSize,
  }
}
