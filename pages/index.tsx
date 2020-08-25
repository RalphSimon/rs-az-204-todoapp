/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { jsx } from 'theme-ui'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { useState, useCallback } from 'react'

import { AppHeader } from '../components/AppHeader'
import { Todo } from '../components/Todo'
import { TodoList } from '../components/TodoList'
import { TodoData } from '../lib/types'

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('http://localhost:3000/api/todos')
  const data: TodoData[] = await res.json()

  return {
    props: {
      data,
    },
  }
}

const Home: React.FC<{ data: TodoData[] }> = ({ data }): JSX.Element => {
  const [todos, setTodos] = useState(data)

  const handleChecked = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
      e.persist()
      const checked = e.currentTarget.checked
      const updatedTodos = [...todos]

      updatedTodos[index].completed = checked
      setTodos(updatedTodos)
    },
    []
  )

  return (
    <article
      sx={{
        variant: 'layout.page-container',
      }}
    >
      <Head>
        <title>AZ 204 - ToDo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppHeader title="todos" />
      <main
        sx={{
          variant: 'layout.page-main',
        }}
      >
        <TodoList>
          {todos.map(
            ({ id, completed, description, created, userId }, index) => (
              <Todo
                key={`${id}-${userId}`}
                id={id}
                description={`${description} - ${index}`}
                created={created}
                completed={completed}
                onChange={(e) => {
                  handleChecked(e, index)
                }}
              />
            )
          )}
        </TodoList>
      </main>
    </article>
  )
}
export default Home
