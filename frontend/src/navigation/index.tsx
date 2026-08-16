import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/Splash';
import LanguageSelect from '../screens/LanguageSelect';
import RoleSelect from '../screens/RoleSelect';
import Login from '../screens/Login';
import ChildProfileSetup from '../screens/ChildProfileSetup';
import ChildHome from '../screens/ChildHome';
import ActivityList from '../screens/ActivityList';
import BubblePop from '../screens/BubblePop';
import Settings from '../screens/Settings';

const Stack = createNativeStackNavigator();

export default function RootNavigator(){
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="LanguageSelect" component={LanguageSelect} />
        <Stack.Screen name="RoleSelect" component={RoleSelect} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ChildProfileSetup" component={ChildProfileSetup} />
        <Stack.Screen name="ChildHome" component={ChildHome} />
        <Stack.Screen name="ActivityList" component={ActivityList} />
        <Stack.Screen name="BubblePop" component={BubblePop} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
