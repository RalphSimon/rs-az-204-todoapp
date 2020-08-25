import { useReducer, Dispatch, Reducer } from 'react'
import { TodoData } from '../types'

type TodoActions =
  | 'GET_TODOS'
  | 'GET_TODO_BY_ID'
  | 'ADD_TODO'
  | 'DELETE_TODO'
  | 'UPDATE_TODO'

type TodoAction = {
  type: TodoActions
  payload: Partial<TodoData>
}

type TodoState = TodoData[]
type TodosReducer = Reducer<TodoState, TodoAction>

const reducer: TodosReducer = (
  state: TodoState,
  action: TodoAction
): TodoState => {
  switch (action.type) {
    case 'GET_TODOS': {
      return {
        ...state,
      }
    }
    case 'GET_TODO_BY_ID': {
      return { ...state }
    }
  }
}

const init = () => []

export const useTodos = (userId: string) => {
  const [state, dispatch] = useReducer<TodosReducer, string>(
    reducer,
    userId,
    init
  )
  return {
    state,
    dispatch,
  }
}
