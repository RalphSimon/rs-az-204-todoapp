/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { jsx, SxProps } from 'theme-ui'
import React from 'react'

type Props = {
  title: string
} & SxProps

export const AppHeader: React.FC<Props> = ({ title, ...props }) => {
  return (
    <header
      {...props}
      sx={{
        variant: 'layout.app-header',
      }}
    >
      <h1
        sx={{
          variant: 'text.h5',
        }}
      >
        {title}
      </h1>
    </header>
  )
}
