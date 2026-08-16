import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '../theme';

export default function BottomNav({ state, navigation }: any){
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.item} onPress={()=>navigation.navigate('ChildHome')}><Text>Home</Text></TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={()=>navigation.navigate('ActivityList')}><Text>Activities</Text></TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={()=>navigation.navigate('Therapy')}><Text>Therapy</Text></TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={()=>navigation.navigate('Progress')}><Text>Progress</Text></TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={()=>navigation.navigate('Settings')}><Text>Profile</Text></TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({ container:{flexDirection:'row',height:64,alignItems:'center',justifyContent:'space-around',backgroundColor:'#fff',borderTopWidth:1,borderColor:'#eee'}, item:{alignItems:'center'} })
