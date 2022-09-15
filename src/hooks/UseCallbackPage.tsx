import React, { FC, useCallback, useState } from 'react'
import { View } from 'react-native'
import SharedStyles from '../SharedStyles'
import ToDoListComponent from '../components/ToDoListComponent'
import MemoCallbackHeaderComponent from '../components/MemoCallbackHeaderComponent'

const UseCallbackPage: FC = () => {
  const [count, setCount] = useState<number>(0)
  const [todos, setTodos] = useState<string[]>([])

  const increment = (): void => {
    setCount((c: number) => c + 1)
  }

  const addTodo = useCallback(() => {
    setTodos((t: string[]) => [...t, 'New Todo'])
  }, [todos])

  return (
    <View style={SharedStyles.pageContainer}>
      <MemoCallbackHeaderComponent count={count} onIncrement={increment} />

      <ToDoListComponent todos={todos} onAddToDo={addTodo} />
    </View>
  )
}

export default UseCallbackPage
