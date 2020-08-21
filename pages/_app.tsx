import { AppProps } from 'next/app'
import { ThemeProvider } from 'theme-ui'
import { CheckCircle, User } from 'react-feather'

import { AppNavRoot, NavLink } from '../components/AppNav'
import { theme } from '../lib/theme'

const AppRoot = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <main
        sx={{
          variant: 'layout.app-root',
        }}
      >
        <Component {...pageProps} />
        <AppNavRoot>
          <NavLink href="/" title="Todos" active>
            <CheckCircle size={20} />
          </NavLink>
          <NavLink href="/" title="Profile">
            <User size={20} />
          </NavLink>
        </AppNavRoot>
      </main>
    </ThemeProvider>
  )
}

export default AppRoot
