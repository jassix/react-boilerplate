import { css } from '@emotion/react'

import { media } from '~/shared/lib/media-query'

export const container = css({
  display: 'flex',
  flexDirection: 'column',
  padding: '0 48px',

  [media('md')]: {
    padding: '0 32px',
  },
})
