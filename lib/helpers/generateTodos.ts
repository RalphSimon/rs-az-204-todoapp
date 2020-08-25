import { getRandomIntInclusive } from './random'
import { TodoData } from '../types'

const descriptions = [
  'Buy milk',
  'Call mum',
  'Feed the cat',
  'Go for a run',
  'Check this list',
  'Study Azure Functions',
  'Get cheese',
  'Count apples',
  'Walk a mile',
  'Do 50 push-ups',
  'Write a book',
  'Drive the car',
  'Buy diapers',
]

export const generateTodos = (length: number, userId: string): TodoData[] =>
  Array.from({ length }).map((_, i) => {
    const created = new Date(
      2020,
      9,
      getRandomIntInclusive(1, i + 1)
    ).toLocaleDateString()

    const description =
      descriptions[getRandomIntInclusive(0, descriptions.length)]
    const completed = getRandomIntInclusive(0, 1) === 0

    return {
      id: `todo-${i + 1}`,
      completed,
      userId,
      created,
      description,
    }
  })
