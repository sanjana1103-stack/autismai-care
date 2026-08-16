import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { loadRewards, loadStats } from '../store/storage';

export default function Rewards({ navigation }: any){
  const [rewards, setRewards] = useState<any[]>([]);
  const [stats, setStats] = useState<any>({stars:0,coins:0});

  useEffect(()=>{ loadRewards().then(r=>setRewards(r)); loadStats().then(s=>setStats(s)); },[]);

  return (
    <View style={{flex:1,padding:16}}>
      <Text style={{fontSize:20,fontWeight:'700'}}>Rewards</Text>
      <Text style={{marginTop:8}}>Stars: {stats.stars||0} • Coins: {stats.coins||0}</Text>
      <FlatList data={rewards} keyExtractor={r=>r.activitySessionId} renderItem={({item})=> (
        <View style={styles.item}><Text>⭐{item.stars} • 🪙{item.coins}</Text><Text style={{color:'#666'}}>{new Date(item.date).toLocaleString()}</Text></View>
      )} />
    </View>
  )
}

const styles = StyleSheet.create({ item:{backgroundColor:'#fff',padding:12,borderRadius:8,marginTop:8} })
