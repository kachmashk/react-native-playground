import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Provider } from 'react-redux'
import store from './core/redux/store'
import HomePage from './ui/pages/HomePage'
import UseCallbackPage from './core/hooks/UseCallbackPage'
import UseMemoPage from './core/hooks/UseMemoPage'
import MemoPage from './core/hooks/MemoPage'
import UseRefPage from './core/hooks/UseRefPage'
import ProfilePage from './ui/pages/ProfilePage'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="useCallback" component={UseCallbackPage} />
          <Stack.Screen name="useMemo" component={UseMemoPage} />
          <Stack.Screen name="memo" component={MemoPage} />
          <Stack.Screen name="useRef" component={UseRefPage} />
          <Stack.Screen name="Profile" component={ProfilePage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App
