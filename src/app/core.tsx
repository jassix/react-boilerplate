import 'normalize.css'

import { Fragment } from 'react'

import { withProviders } from './providers'
import { ApplicationRouter } from './router'
import { GlobalStyles } from './styles/global'

export const Core = withProviders(() => (
  <Fragment>
    <GlobalStyles />
    <ApplicationRouter />
  </Fragment>
))
