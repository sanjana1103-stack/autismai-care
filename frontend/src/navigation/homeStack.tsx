import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChildHome from '../screens/ChildHome';
import ActivityList from '../screens/ActivityList';
import BubblePop from '../screens/BubblePop';
import ActivityComplete from '../screens/ActivityComplete';
import Rewards from '../screens/Rewards';
import SpeechMirror from '../screens/SpeechMirror';
import VisualAttention from '../screens/VisualAttention';
import EmotionMatch from '../screens/EmotionMatch';
import AnimalHunt from '../screens/AnimalHunt';
import InstructionFollowing from '../screens/InstructionFollowing';
import SandDrawing from '../screens/SandDrawing';
import SensoryCalm from '../screens/SensoryCalm';
import ParentDashboard from '../screens/ParentDashboard';
import ProgressScreen from '../screens/Progress';
import Therapy from '../screens/Therapy';
import Settings from '../screens/Settings';

const Stack = createNativeStackNavigator();

export default function HomeStack(){
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
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
      <Stack.Screen name="Progress" component={ProgressScreen} />
      <Stack.Screen name="Therapy" component={Therapy} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  )
}
