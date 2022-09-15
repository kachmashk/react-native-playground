import React, { FC } from 'react'
import { Pressable, Text } from 'react-native'
import SharedStyles from '../SharedStyles'

type ButtonProps = {
  label: string
  onPress: () => void
}

const ButtonComponent: FC<ButtonProps> = (props) => {
  return (
    <Pressable style={SharedStyles.button} onPress={props.onPress}>
      <Text style={SharedStyles.buttonLabel}>{`${props.label}`}</Text>
    </Pressable>
  )
}

export default ButtonComponent
