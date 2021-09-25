import React from 'react'
import { View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home, MyCards } from '../screens'
import { colors } from '../constants'
import HomeIcon from '../../assets/images/home.svg'
import CardIcon from '../../assets/images/card.svg'

const Tab = createBottomTabNavigator()

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.background,
          borderColor: 'transparent',
          height: 60,
          borderTopColor: colors.gray3
        },
        tabBarBackground: () => (
          <View
            style={{
              backgroundColor: colors.background
            }}
          />
        )
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: () => <HomeIcon />
        }}
      />

      <Tab.Screen
        name="MyCards"
        component={MyCards}
        options={{
          headerShown: false,
          tabBarIcon: () => <CardIcon />
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTabNavigator
