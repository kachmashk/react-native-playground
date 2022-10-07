import React, { FC, useEffect } from 'react'
import { TextInput } from 'react-native'
import TextInputStyles from './TextInputStyles'

type TextInputProps = {
  placeholder: string
  onSubmit: (input: string) => void
}

const TextInputComponent: FC<TextInputProps> = (props) => {
  useEffect(() => console.log(TextInputComponent.name))

  return (
    <TextInput
      style={TextInputStyles.input}
      placeholder={props.placeholder}
      onSubmitEditing={(e) => {
        if (e.nativeEvent.text) {
          props.onSubmit(e.nativeEvent.text)
        }
      }}
    />
  )
}

export default TextInputComponent
