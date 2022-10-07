import React, { FC, memo, useEffect } from 'react'
import { FlatList, Text } from 'react-native'
import ButtonComponent from './ButtonComponent'

type ToDoListProps = {
  todos: string[]
  onAddToDo?: () => void
}

const ToDoListComponent: FC<ToDoListProps> = (props) => {
  useEffect(() => console.log('ToDoListComponent -> useEffect(() => {})'))
  useEffect(
    () => console.log('ToDoListComponent -> useEffect(() => {}, [])'),
    []
  )

  return (
    <FlatList
      ListHeaderComponent={
        props.onAddToDo && (
          <ButtonComponent label="add to do" onPress={props.onAddToDo} />
        )
      }
      data={props.todos}
      renderItem={({ item }) => <Text>{`${item}`}</Text>}
    />
  )
}

export default memo(ToDoListComponent)
