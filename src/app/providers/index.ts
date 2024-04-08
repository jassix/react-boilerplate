import compose from 'compose-function'

import { withEffector } from './with-effector'
import { withErrorBoundary } from './with-error-boundary'

export const withProviders = compose(withErrorBoundary, withEffector)
