import React, { FC, useEffect, useRef, useState } from 'react'
import { Text, TextInput, View } from 'react-native'
import SharedStyles from '../SharedStyles'

const UseRefPage: FC = () => {
  const [inputValue, setInputValue] = useState<string>('')

  const count = useRef<number>(0)

  const inputRef = useRef(null)

  const previousInputValue = useRef<string>('')

  useEffect(() => {
    count.current = count.current + 1
  })

  useEffect(() => {
    previousInputValue.current = inputValue
  }, [inputValue])

  return (
    <View style={SharedStyles.pageContainer}>
      <TextInput
        ref={inputRef}
        placeholder="placeholder"
        style={SharedStyles.input}
        value={inputValue}
        onChangeText={setInputValue}
      />

      <Text>{`Render count: ${count.current}`}</Text>

      <Text>{`Current value: ${inputValue}`}</Text>
      <Text>{`Previous value: ${previousInputValue.current}`}</Text>
    </View>
  )
}

export default UseRefPage
