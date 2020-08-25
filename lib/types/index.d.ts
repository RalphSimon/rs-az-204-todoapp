/* ENTITIES */
export interface Todo {
  id?: string
  userId?: string
  completed?: boolean
  created?: string | Date
  description?: string
}

export type TodoData = Todo

/* THEME */
export type SizeTypes = 'small' | 'medium' | 'large' | 'x-large' | 'default'

export type SizeMap = {
  [key in SizeTypes]: string | number
}

export interface ColorMap extends ColorMode {
  'gray-0': string
  'gray-1': string
  'gray-2': string
  'gray-3': string
  'gray-4': string
  'gray-5': string
  'gray-6': string
  'gray-7': string
  'gray-8': string
  'gray-9': string
  'red-0': string
  'red-1': string
  'red-2': string
  'red-3': string
  'red-4': string
  'red-5': string
  'red-6': string
  'red-7': string
  'red-8': string
  'red-9': string
  'pink-0': string
  'pink-1': string
  'pink-2': string
  'pink-3': string
  'pink-4': string
  'pink-5': string
  'pink-6': string
  'pink-7': string
  'pink-8': string
  'pink-9': string
  'grape-0': string
  'grape-1': string
  'grape-2': string
  'grape-3': string
  'grape-4': string
  'grape-5': string
  'grape-6': string
  'grape-7': string
  'grape-8': string
  'grape-9': string
  'violet-0': string
  'violet-1': string
  'violet-2': string
  'violet-3': string
  'violet-4': string
  'violet-5': string
  'violet-6': string
  'violet-7': string
  'violet-8': string
  'violet-9': string
  'indigo-0': string
  'indigo-1': string
  'indigo-2': string
  'indigo-3': string
  'indigo-4': string
  'indigo-5': string
  'indigo-6': string
  'indigo-7': string
  'indigo-8': string
  'indigo-9': string
  'blue-0': string
  'blue-1': string
  'blue-2': string
  'blue-3': string
  'blue-4': string
  'blue-5': string
  'blue-6': string
  'blue-7': string
  'blue-8': string
  'blue-9': string
  'cyan-0': string
  'cyan-1': string
  'cyan-2': string
  'cyan-3': string
  'cyan-4': string
  'cyan-5': string
  'cyan-6': string
  'cyan-7': string
  'cyan-8': string
  'cyan-9': string
  'teal-0': string
  'teal-1': string
  'teal-2': string
  'teal-3': string
  'teal-4': string
  'teal-5': string
  'teal-6': string
  'teal-7': string
  'teal-8': string
  'teal-9': string
  'green-0': string
  'green-1': string
  'green-2': string
  'green-3': string
  'green-4': string
  'green-5': string
  'green-6': string
  'green-7': string
  'green-8': string
  'green-9': string
  'lime-0': string
  'lime-1': string
  'lime-2': string
  'lime-3': string
  'lime-4': string
  'lime-5': string
  'lime-6': string
  'lime-7': string
  'lime-8': string
  'lime-9': string
  'yellow-0': string
  'yellow-1': string
  'yellow-2': string
  'yellow-3': string
  'yellow-4': string
  'yellow-5': string
  'yellow-6': string
  'yellow-7': string
  'yellow-8': string
  'yellow-9': string
  'orange-0': string
  'orange-1': string
  'orange-2': string
  'orange-3': string
  'orange-4': string
  'orange-5': string
  'orange-6': string
  'orange-7': string
  'orange-8': string
  'orange-9': string
}
