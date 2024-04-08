import { useLinkProps } from '@swan-io/chicane'
import { cva } from 'class-variance-authority'
import clsx from 'clsx'
import { AnchorHTMLAttributes, forwardRef, PropsWithChildren } from 'react'

import { link } from './styles'

const linkVariance = cva()

export interface LinkProps
  extends PropsWithChildren,
    AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string
  replace?: boolean
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ to, replace, children, ...props }, ref) => {
    const { active, onClick } = useLinkProps({ href: to, replace })

    return (
      <a
        {...props}
        ref={ref}
        href={to}
        css={clsx(link.base, active && link.active)}
        onClick={onClick}
      >
        {children}
      </a>
    )
  },
)
