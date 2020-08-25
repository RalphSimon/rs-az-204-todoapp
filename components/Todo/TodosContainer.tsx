/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { jsx, SxProps } from 'theme-ui'

export const TodosContainer: React.FC<SxProps> = ({ children, ...props }) => {
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
