import React, { FC, useCallback, useState } from 'react'
import { View } from 'react-native'
import SharedStyles from '../SharedStyles'
import ToDoListComponent from '../components/ToDoListComponent'
import MemoCallbackHeaderComponent from '../components/MemoCallbackHeaderComponent'

const MemoPage: FC = () => {
  const [count, setCount] = useState<number>(0)
  const [todos] = useState<string[]>(['New Todo', 'New Todo'])

  const increment = (): void => {
    setCount((c: number) => c + 1)
  }

  return (
    <View style={SharedStyles.pageContainer}>
      <MemoCallbackHeaderComponent count={count} onIncrement={increment} />

      <ToDoListComponent todos={todos} />
    </View>
  )
}

export default MemoPage
