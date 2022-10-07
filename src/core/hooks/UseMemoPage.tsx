import React, { FC, useMemo, useState } from 'react'
import { Text, View } from 'react-native'
import SharedStyles from '../../SharedStyles'
import MemoCallbackHeaderComponent from '../../ui/components/MemoCallbackHeaderComponent'
import ToDoListComponent from '../../ui/components/ToDoListComponent'

const UseMemoPage: FC = () => {
  const [count, setCount] = useState<number>(0)
  const [todos, setTodos] = useState<string[]>([])

  const increment = (): void => {
    setCount((c: number) => c + 1)
  }

  const addTodo = (): void => {
    setTodos((t: string[]) => [...t, 'New Todo'])
  }

  const expensiveCalculation = (num: number) => {
    for (let i = 0; i < 1000000; i++) {
      num += 1
    }
    return num
  }

  const calculation = useMemo(() => expensiveCalculation(count), [count])

  return (
    <View style={SharedStyles.pageContainer}>
      <MemoCallbackHeaderComponent count={count} onIncrement={increment} />

      <Text>{calculation}</Text>

      <ToDoListComponent todos={todos} onAddToDo={addTodo} />
    </View>
  )
}

export default UseMemoPage
