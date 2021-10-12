import { useState, useEffect } from 'react'

export const useDebounce = <Value>(value: Value, delay: number): Value => {
  const [debouncedValue, setDebouncedValue] = useState<Value>(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])
  return debouncedValue
}
