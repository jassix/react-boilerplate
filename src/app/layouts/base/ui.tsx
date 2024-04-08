import { FC, Fragment, PropsWithChildren } from 'react'

import { ContentSlot, FooterSlot, NavbarSlot } from '~/app/layouts'
import { Container } from '~/shared/ui/atoms/container'

export const BaseLayout: FC<PropsWithChildren> = ({ children }) => (
  <Fragment>
    <NavbarSlot.Renderer childs={children} />

    <Container>
      <ContentSlot.Renderer childs={children} />
    </Container>

    <FooterSlot.Renderer childs={children} />
  </Fragment>
)
