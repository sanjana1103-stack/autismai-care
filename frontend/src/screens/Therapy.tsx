import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Therapy({ navigation }: any){
  return (
    <View style={{flex:1,padding:16}}>
      <Text style={{fontSize:20,fontWeight:'700'}}>Therapy Support</Text>
      <Text style={{marginTop:12}}>This app is a supportive practice tool and does not replace professional therapy.</Text>
      <View style={{marginTop:12,backgroundColor:'#fff',padding:12,borderRadius:12}}>
        <Text>Today's practice</Text>
        <Text>• Bubble Pop</Text>
        <Text>• Speech Mirror</Text>
      </View>
    </View>
  )
}
