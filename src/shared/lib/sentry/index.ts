import {
  browserTracingIntegration,
  init,
  replayIntegration,
} from '@sentry/react'

import { env } from '~/shared/config'

export const sentryInit = () => {
  init({
    dsn: `https://${env().sentryKey}.ingest.us.sentry.io/4507053306413056`,

    integrations: [
      browserTracingIntegration(),
      replayIntegration({
        maskAllText: false,
        blockAllMedia: false,
      }),
    ],

    tracesSampleRate: 1,
    tracePropagationTargets: ['localhost', /^https:\/\/yourserver\.io\/api/],

    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1,
  })
}
