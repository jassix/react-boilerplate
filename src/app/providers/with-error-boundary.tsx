import { ErrorInfo, ReactElement } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import { ErrorPage } from '~/pages/error'

export const withErrorBoundary = (component: () => ReactElement) => () => {
  const onError = (_error: Error, _info: ErrorInfo) => {}

  return (
    <ErrorBoundary fallbackRender={ErrorPage} onError={onError}>
      {component()}
    </ErrorBoundary>
  )
}
