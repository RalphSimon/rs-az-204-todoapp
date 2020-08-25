/* eslint-disable no-console */
import { writeFile } from 'fs'
import { promisify } from 'util'
import { join } from 'path'

import { generateTodos } from '../lib/helpers'

const todos = generateTodos(20, 'John Doe')

const writeAsync = promisify(writeFile)

/* SPACER */
;(async function main() {
  try {
    // console.log(__dirname)
    const todosToString = JSON.stringify(todos, null, 4)
    const path = join(__dirname, '../lib/data/mock-todos.json')
    console.log(path)
    await writeAsync(path, todosToString)
  } catch (error) {
    console.error('Error writing file', error)
  }
})()
