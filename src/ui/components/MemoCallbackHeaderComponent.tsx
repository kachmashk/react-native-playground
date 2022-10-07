import React, { FC, memo } from 'react'
import { Text, View } from 'react-native'
import SharedStyles from '../../SharedStyles'
import ButtonComponent from './ButtonComponent'

type MemoCallbackHeaderProps = {
  count: number
  onIncrement: () => void
}

const MemoCallbackHeaderComponent: FC<MemoCallbackHeaderProps> = (props) => {
  return (
    <View>
      <Text style={SharedStyles.title}>{`Counter: ${props.count}`}</Text>

      <ButtonComponent label="increment" onPress={props.onIncrement} />
    </View>
  )
}

export default memo(MemoCallbackHeaderComponent)
