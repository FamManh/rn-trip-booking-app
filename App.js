import React from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'


import { Home, Onboarding, DestinationDetail } from './screens'
import { COLORS, icons, SIZES } from './constants'
import Tabs from './navigation/Tabs'

const Stack = createStackNavigator()
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent'
  }
}

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{
            title: null,
            headerStyle: {
              backgroundColor: COLORS.white
            },
            headerRight: () => (
              <TouchableOpacity
                style={{
                  marginRight: SIZES.padding
                }}
                onPress={() => console.log("Pressed")}
              >
                <Image source={icons.barMenu} style={{ width: 25, height: 25 }} />
              </TouchableOpacity>
            )
          }}
        />
        {/* Tabs  */}
        <Stack.Screen
          name="Home"
          component={Tabs}
          options={{
            title: null,
            headerStyle: {
              backgroundColor: COLORS.white
            },
            headerLeft: ({onPress})=>(
              <TouchableOpacity style={{marginLeft: SIZES.padding}} onPress={onPress}>
                <Image source={icons.back} resizeMode="contain" style={{width: 25, height: 25}}  />
              </TouchableOpacity>
            ),
            headerRight: ({onPress})=>(
              <TouchableOpacity style={{marginRight: SIZES.padding}} onPress={()=>console.log("Pressed")}>
                <Image source={icons.menu} resizeMode="contain" style={{width: 25, height: 25}}  />
              </TouchableOpacity>
            )
          }}
        />
        <Stack.Screen name="DestinationDetail" component={DestinationDetail} options={{
          headerShown: false
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
