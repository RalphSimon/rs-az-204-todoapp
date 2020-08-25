/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { jsx } from 'theme-ui'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'theme-ui'
import { CheckCircle, User } from 'react-feather'

import { AppNavRoot, NavLink } from '../components/AppNav'
import { theme } from '../lib/theme'

const AppRoot = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <div
        sx={{
          variant: 'layout.app-root',
        }}
      >
        <Component {...pageProps} />
        <AppNavRoot>
          <NavLink href="/" title="Todos" active>
            <CheckCircle size={20} />
          </NavLink>
          <NavLink href="/profile" title="Profile">
            <User size={20} />
          </NavLink>
        </AppNavRoot>
      </div>
    </ThemeProvider>
  )
}

export default AppRoot
