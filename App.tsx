import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet } from 'react-native'
import { colors } from './src/constants'
import { Welcome } from './src/screens'
import BottomNavigation from './src/navigation/BottomTabNavigator'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="HomePage" component={BottomNavigation} />
      </Stack.Navigator>
      <StatusBar backgroundColor={colors.background} />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
