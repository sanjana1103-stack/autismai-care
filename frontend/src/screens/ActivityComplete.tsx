import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { awardRewards } from '../store/storage';

export default function ActivityComplete({ route, navigation }: any){
  const { activitySessionId, stars=3, coins=5 } = route.params || {};

  async function onClaim(){
    const ok = await awardRewards(activitySessionId, stars, coins);
    navigation.replace('Rewards');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎉 Great job!</Text>
      <Text style={styles.sub}>You earned {stars} stars and {coins} coins</Text>
      <TouchableOpacity style={styles.btn} onPress={onClaim}><Text style={{color:'#fff'}}>Claim Rewards</Text></TouchableOpacity>
      <TouchableOpacity style={[styles.btn,{backgroundColor:'#eee',marginTop:8}]} onPress={()=>navigation.replace('ChildHome')}><Text>Back to Home</Text></TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({ container:{flex:1,alignItems:'center',justifyContent:'center',padding:16}, title:{fontSize:28,fontWeight:'700'}, sub:{marginTop:12}, btn:{backgroundColor:'#7C4DFF',padding:12,borderRadius:8,marginTop:20}})
