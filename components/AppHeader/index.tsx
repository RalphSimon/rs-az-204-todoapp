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
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        bg: 'white',
        height: '64px',
        p: 3,
      }}
    >
      <h1
        sx={{
          fontSize: '1.25rem',
          letterSpacing: '1.25px',
          m: 0,
          textTransform: 'uppercase',
        }}
      >
        {title}
      </h1>
    </header>
  )
}
