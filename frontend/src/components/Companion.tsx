import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Companion({ name = 'Panda', size = 80 }: { name?: string; size?: number }){
  const emoji = name === 'Panda' ? '🐼' : name === 'Elephant' ? '🐘' : name === 'Lion' ? '🦁' : name === 'Bunny' ? '🐰' : '🐻';
  return (
    <View style={[styles.container,{width:size,height:size,borderRadius:size/2}]}> 
      <Text style={{fontSize: size*0.6}}>{emoji}</Text>
    </View>
  )
}

const styles = StyleSheet.create({ container:{alignItems:'center',justifyContent:'center',backgroundColor:'#fff',elevation:4} })
