import { Theme } from 'theme-ui'
import OpenColorMap from 'open-color/open-color.json'
import OpenColor from 'open-color'

import { ColorMap } from '../types'

function mapOpenColor(oc: OpenColor): Theme['colors'] {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { white, black, ...ocMap } = oc

  const mapped: ColorMap = Object.entries(ocMap).reduce(
    (newMap, [key, value]) => {
      const cm = value.reduce(
        (m: { [key: string]: string }, color: string, i: number) => {
          return {
            ...m,
            [`${key}-${i}`]: color,
          }
        },
        {}
      )

      return {
        ...newMap,
        ...cm,
      }
    },
    {}
  )

  return {
    text: mapped['gray-9'],
    background: mapped['gray-1'],
    primary: mapped['violet-5'],
    secondary: mapped['violet-9'],
    accent: mapped['orange-5'],
    success: mapped['green-5'],
    error: mapped['red-5'],
    warning: mapped['yellow-5'],
    gray: mapped['gray-5'],
    muted: mapped['gray-1'],
    white: '#fff',
    ...mapped,
  }
}

const colorMap = mapOpenColor(OpenColorMap)

export const colors: Theme['colors'] = {
  ...colorMap,
}
