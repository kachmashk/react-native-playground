import React, { FC } from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import SharedStyles from '../../SharedStyles'
import ButtonComponent from '../components/ButtonComponent'

const HomePage: FC = () => {
  const navigation = useNavigation<StackNavigationProp<any>>()

  return (
    <View style={SharedStyles.pageContainer}>
      <ButtonComponent
        label="useRef"
        onPress={() => navigation.navigate('useRef')}
      />

      <ButtonComponent
        label="memo"
        onPress={() => navigation.navigate('memo')}
      />

      <ButtonComponent
        label="useCallback + memo"
        onPress={() => navigation.navigate('useCallback')}
      />

      <ButtonComponent
        label="useMemo"
        onPress={() => navigation.navigate('useMemo')}
      />

      <ButtonComponent
        label="Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  )
}

export default HomePage
