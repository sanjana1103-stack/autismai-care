import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { loadSessions, loadStats } from '../store/storage';

export default function ParentDashboard({ navigation }: any){
  const [sessions, setSessions] = useState<any[]>([]);
  const [stats, setStats] = useState<any>({stars:0,coins:0,streak:0});

  useEffect(()=>{ loadSessions().then(s=>setSessions(s)); loadStats().then(s=>setStats(s)); },[]);

  const total = sessions.length;
  const today = sessions.filter(s=> s.completedAt && s.completedAt.slice(0,10)=== new Date().toISOString().slice(0,10)).length;

  return (
    <View style={{flex:1,padding:16}}>
      <Text style={{fontSize:20,fontWeight:'700'}}>Parent Dashboard</Text>
      <Text style={{marginTop:8}}>Child: Aarav • Age: 4.5</Text>
      <View style={{marginTop:12,backgroundColor:'#fff',padding:12,borderRadius:12}}>
        <Text>Today's activities: {today}</Text>
        <Text>Total activities: {total}</Text>
        <Text>Stars: {stats.stars||0} • Coins: {stats.coins||0} • Streak: {stats.streak||0}d</Text>
      </View>
      <View style={{marginTop:12}}>
        <Text style={{fontWeight:'700'}}>Recent Activity</Text>
        {sessions.slice(-5).reverse().map(s=> (
          <View key={s.activitySessionId} style={{backgroundColor:'#fff',padding:10,borderRadius:8,marginTop:8}}>
            <Text>{s.activityId} • {new Date(s.completedAt).toLocaleString()}</Text>
          </View>
        ))}
      </View>
    </View>
  )
}
