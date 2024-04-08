import React from 'react'
import ReactDOM from 'react-dom/client'

import { appStarted } from '~/shared/entry-point'
import { sentryInit } from '~/shared/lib/sentry'

import { Core } from './core'

sentryInit()

const root = document.querySelector('#app')!

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Core />
  </React.StrictMode>,
)

appStarted()
