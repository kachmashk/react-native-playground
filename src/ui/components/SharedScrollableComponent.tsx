import React, { FC, ReactNode } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SharedStyles from '../../SharedStyles'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

type SharedScrollableProps = {
  children: ReactNode
}

const SharedScrollableComponent: FC<SharedScrollableProps> = (props) => {
  return (
    <SafeAreaView edges={['top', 'bottom']} style={SharedStyles.safeAreaView}>
      <KeyboardAwareScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          justifyContent: 'flex-start',
          alignItems: 'center'
        }}>
        {props.children}
      </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}

export default SharedScrollableComponent
