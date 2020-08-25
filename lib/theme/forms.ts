import { Theme } from 'theme-ui'

export const forms: Theme['forms'] = {
  'todo-root': {
    position: 'relative',
    borderBottom: ({ colors }) => `1px solid ${colors.muted}`,
    '&:last-of-type': {
      borderBottom: 'none',
    },
  },
  'todo-label': {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    alignContent: 'flex-end',
    p: 3,
    cursor: 'pointer',
  },
  'todo-input': {
    position: 'absolute',
    top: 0,
    left: 0,
    opacity: 0,
  },
}
