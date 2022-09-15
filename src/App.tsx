import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SafeAreaView } from 'react-native-safe-area-context'
import HomePage from './HomePage'
import UseCallbackPage from './hooks/UseCallbackPage'
import UseMemoPage from './hooks/UseMemoPage'
import SharedStyles from './SharedStyles'
import MemoPage from './hooks/MemoPage'
import UseRefPage from './hooks/UseRefPage'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <SafeAreaView edges={['top', 'bottom']} style={SharedStyles.safeAreaView}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="useCallback" component={UseCallbackPage} />
          <Stack.Screen name="useMemo" component={UseMemoPage} />
          <Stack.Screen name="memo" component={MemoPage} />
          <Stack.Screen name="useRef" component={UseRefPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default App
