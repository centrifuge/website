export function toLocaleDate(timestamp: number | string | Date, locale: string = 'en-US') {
  return new Date(timestamp).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}
