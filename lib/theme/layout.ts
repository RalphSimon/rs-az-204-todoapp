import { Theme } from 'theme-ui'

export const layout: Theme['layout'] = {
  'app-root': {
    zIndex: 0,
    position: 'relative',
    width: '100vw',
    height: '100vh',
    bg: 'background',
  },
  'app-nav-root': {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '64px',
    bg: 'white',
  },
  'app-nav': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    mx: 'auto',
  },
}
