/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { jsx, SxProps } from 'theme-ui'
import React from 'react'
import Link, { LinkProps } from 'next/link'

type Props = {
  active?: boolean
} & React.AnchorHTMLAttributes<HTMLAnchorElement> &
  SxProps &
  LinkProps

export const NavLink: React.FC<Props> = ({
  active,
  as,
  children,
  href,
  title,
  ...props
}) => {
  const classes = active ? 'active' : ''

  return (
    <Link href={href} as={as} passHref>
      <a
        {...props}
        className={classes}
        title={title}
        sx={{
          variant: 'links.nav-link',
        }}
      >
        {children}
        <span
          sx={{
            variant: 'text.caption',
          }}
        >
          {title}
        </span>
      </a>
    </Link>
  )
}
