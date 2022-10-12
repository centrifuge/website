export function removeFalsyFromObject(obj) {
  return Object.entries(obj).reduce((a, [k, v]) => (v ? ((a[k] = v), a) : a), {})
}
