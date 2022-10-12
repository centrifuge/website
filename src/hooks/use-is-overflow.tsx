import * as React from 'react'

export const useIsOverflow = (ref: React.RefObject<HTMLDivElement>) => {
  const [isOverflow, setIsOverflow] = React.useState(false)

  React.useEffect(() => {
    const { current } = ref

    const trigger = () => {
      const hasOverflow = current!.scrollWidth > current!.clientWidth

      setIsOverflow(hasOverflow)
    }

    if (current) {
      if ('ResizeObserver' in window) {
        new ResizeObserver(trigger).observe(current)
      }

      trigger()
    }
  }, [ref])

  return isOverflow
}
