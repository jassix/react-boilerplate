export const breakpoints = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
}

export interface MediaQuery {
  parameter: 'max-width' | 'min-width' | 'max-height' | 'min-height'
  value: string
}

export const media = (
  size: keyof typeof breakpoints,
  ...queries: MediaQuery[]
) => {
  const formatedQueries = queries
    .map((query) => `(${query.parameter}: ${query.value})`)
    .join(',')

  return `@media (max-width: ${breakpoints[size]}px) ${formatedQueries.length > 0 ? `, ${formatedQueries}` : ''}`
}
