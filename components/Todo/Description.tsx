/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { jsx, SxProps } from 'theme-ui'
import React from 'react'

type Props = {
  completed?: boolean
} & React.ParamHTMLAttributes<HTMLParagraphElement> &
  SxProps

export const Description: React.FC<Props> = ({
  children,
  completed,
  ...props
}) => {
  return (
    <p
      {...props}
      sx={{
        m: 0,
        textDecoration: completed ? 'line-through' : 'none',
      }}
    >
      {children}
    </p>
  )
}
