import { FC, PropsWithChildren } from 'react'

import { container } from './styles'

export const Container: FC<PropsWithChildren> = ({ children }) => (
  <main css={container}>{children}</main>
)
