/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { jsx, SxProps } from 'theme-ui'
import React from 'react'

export const TodoList: React.FC<SxProps> = ({ children, ...props }) => {
  return (
    <section
      {...props}
      sx={{
        variant: 'layout.todos-container',
      }}
    >
      {children}
    </section>
  )
}
