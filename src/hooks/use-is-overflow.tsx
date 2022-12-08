import * as React from 'react'

export const useIsOverflow = (ref: React.RefObject<HTMLDivElement>) => {
  const [isOverflow, setIsOverflow] = React.useState(false)
  let observer: ResizeObserver | null = null

  React.useEffect(() => {
    const { current } = ref

    const trigger = () => {
      const hasOverflow = current!.scrollWidth > current!.clientWidth

      setIsOverflow(hasOverflow)
    }

    if (current) {
      if ('ResizeObserver' in window) {
        if (observer) {
          observer.unobserve(current)
        }
        observer = new ResizeObserver(trigger)
        observer.observe(current)
      }

      trigger()
    }

    return () => {
      if (observer && current) {
        observer.unobserve(current)
      }
    }
  }, [ref])

  return isOverflow
}
