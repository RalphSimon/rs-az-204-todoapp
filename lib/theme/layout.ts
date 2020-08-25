import { Theme } from 'theme-ui'

export const layout: Theme['layout'] = {
  'app-root': {
    zIndex: 0,
    position: 'relative',
    width: '100vw',
    height: '100vh',
    bg: 'background',
  },
  'app-header': {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    bg: 'white',
    height: '64px',
    p: 3,
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
  'page-container': {
    width: '100%',
    height: '100%',
  },
  'page-main': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
    width: '100%',
    height: 'calc(100vh - 128px)',
    p: 3,
    overflow: 'hidden',
  },
  'todos-container': {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '720px',
    height: 'calc(100% - 32px)',
    borderRadius: 'small',
    bg: 'white',
    overflowY: 'scroll',
  },
}
