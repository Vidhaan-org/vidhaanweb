import { useLayoutEffect, useState } from "react"

export function useWindowSize(callbackFuncion: () => void) {
  const [size, setSize] = useState([0, 0])
  useLayoutEffect(() => {
    window.addEventListener("resize", callbackFuncion)
    callbackFuncion()
    return () => window.removeEventListener("resize", callbackFuncion)
  }, [])
  return size
}
