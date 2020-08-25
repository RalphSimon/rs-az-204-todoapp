import { Theme } from 'theme-ui'

export const links: Theme['links'] = {
  'nav-link': {
    width: '48px',
    height: '48px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    color: 'primary',
    mx: 2,
    opacity: 0.64,
    '&:active, &.active': {
      color: 'primary',
      opacity: 1,
    },
  },
}
