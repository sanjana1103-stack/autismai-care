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
import SpeechMirror from '../screens/SpeechMirror';
import VisualAttention from '../screens/VisualAttention';
import EmotionMatch from '../screens/EmotionMatch';
import AnimalHunt from '../screens/AnimalHunt';
import InstructionFollowing from '../screens/InstructionFollowing';
import SandDrawing from '../screens/SandDrawing';
import SensoryCalm from '../screens/SensoryCalm';
import ActivityComplete from '../screens/ActivityComplete';
import Rewards from '../screens/Rewards';
import ParentDashboard from '../screens/ParentDashboard';
import Progress from '../screens/Progress';
import Therapy from '../screens/Therapy';
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
        <Stack.Screen name="SpeechMirror" component={SpeechMirror} />
        <Stack.Screen name="VisualAttention" component={VisualAttention} />
        <Stack.Screen name="EmotionMatch" component={EmotionMatch} />
        <Stack.Screen name="AnimalHunt" component={AnimalHunt} />
        <Stack.Screen name="InstructionFollowing" component={InstructionFollowing} />
        <Stack.Screen name="SandDrawing" component={SandDrawing} />
        <Stack.Screen name="SensoryCalm" component={SensoryCalm} />
        <Stack.Screen name="ActivityComplete" component={ActivityComplete} />
        <Stack.Screen name="Rewards" component={Rewards} />
        <Stack.Screen name="ParentDashboard" component={ParentDashboard} />
        <Stack.Screen name="Progress" component={Progress} />
        <Stack.Screen name="Therapy" component={Therapy} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
