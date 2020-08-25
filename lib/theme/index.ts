import { Theme } from 'theme-ui'
import { future } from '@theme-ui/presets'

import { colors } from './colors'
import { forms } from './forms'
import { layout } from './layout'
import { links } from './links'
import { text } from './text'

export const theme: Theme = {
  ...(future as Theme),
  breakpoints: ['40em', '56em', '64em'],
  radii: {
    small: '4px',
    default: '10px',
    pill: '20px',
    circle: 99999,
  },
  shadows: {
    default: '0 2px 4px rgba(0,0,0,0.125)',
  },
  colors,
  forms,
  layout,
  links,
  text,
}
