import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/Splash';
import Onboarding from '../screens/Onboarding';
import ChildHome from '../screens/ChildHome';

const Stack = createNativeStackNavigator();

export default function RootNavigator(){
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="ChildHome" component={ChildHome} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
