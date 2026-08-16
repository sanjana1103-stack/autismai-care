import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { loadSessions } from '../store/storage';

export default function ProgressScreen({ navigation }: any){
  const [sessions, setSessions] = useState<any[]>([]);
  useEffect(()=>{ loadSessions().then(s=>setSessions(s)); },[]);

  // simple weekly count
  const last7 = sessions.filter(s=> new Date(s.completedAt) > new Date(Date.now() - 7*24*60*60*1000)).length;

  return (
    <View style={{flex:1,padding:16}}>
      <Text style={{fontSize:20,fontWeight:'700'}}>Progress</Text>
      <View style={{marginTop:12,backgroundColor:'#fff',padding:12,borderRadius:12}}>
        <Text>Activities in last 7 days: {last7}</Text>
      </View>
    </View>
  )
}
