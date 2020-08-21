/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { jsx, SxProps } from 'theme-ui'

export const AppNavRoot: React.FC<SxProps> = ({ children, ...props }) => {
  return (
    <footer
      {...props}
      sx={{
        variant: 'layout.app-nav-root',
      }}
    >
      <nav
        sx={{
          variant: 'layout.app-nav',
        }}
      >
        {children}
      </nav>
    </footer>
  )
}
