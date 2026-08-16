import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Companion from '../components/Companion';
import { loadChildProfile, loadStats } from '../store/storage';
import ProgressBar from '../components/ProgressBar';
import BottomNav from '../components/BottomNav';

export default function ChildHome({ navigation }: any){
  const [child, setChild] = useState<any>(null);
  const [stats, setStats] = useState<any>({stars:0,coins:0,streak:0});

  useEffect(()=>{ loadChildProfile().then(c=>setChild(c)); loadStats().then(s=>setStats(s)); },[]);

  return (
    <View style={{flex:1,backgroundColor:'#F7FBFF'}}>
      <ScrollView contentContainerStyle={{padding:16}}>
        <View style={styles.header}>
          <View>
            <Text style={styles.greet}>Hi {child?.name ?? 'Aarav'}! 👋</Text>
            <Text style={styles.sub}>Let's have a fun learning day!</Text>
          </View>
          <Companion name={child?.companion ?? 'Panda'} size={84} />
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Today's Progress</Text>
          <ProgressBar value={3} max={5} />
          <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:12}}>
            <Text>Stars: {stats.stars||0}</Text>
            <Text>Coins: {stats.coins||0}</Text>
            <Text>Streak: {stats.streak||0}d</Text>
          </View>
        </View>

        <View style={{height:16}} />
        <View style={styles.grid}>
          <TouchableOpacity style={styles.action} onPress={()=>navigation.navigate('BubblePop')}><Text>🎮 Play Now</Text></TouchableOpacity>
          <TouchableOpacity style={styles.action} onPress={()=>navigation.navigate('ActivityList')}><Text>🎯 Daily Goals</Text></TouchableOpacity>
          <TouchableOpacity style={styles.action} onPress={()=>navigation.navigate('Progress')}><Text>📊 Progress</Text></TouchableOpacity>
          <TouchableOpacity style={styles.action} onPress={()=>navigation.navigate('Rewards')}><Text>🎁 Rewards</Text></TouchableOpacity>
          <TouchableOpacity style={styles.action} onPress={()=>navigation.navigate('SpeechMirror')}><Text>💬 Speech Practice</Text></TouchableOpacity>
          <TouchableOpacity style={styles.action} onPress={()=>navigation.navigate('SensoryCalm')}><Text>🧘 Sensory Calm</Text></TouchableOpacity>
        </View>

      </ScrollView>
      <BottomNav navigation={navigation} />
    </View>
  )
}

const styles = StyleSheet.create({ header:{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}, greet:{fontSize:22,fontWeight:'700'}, sub:{color:'#666'}, card:{backgroundColor:'#fff',padding:16,borderRadius:12,marginTop:12}, cardTitle:{fontWeight:'700',marginBottom:8}, grid:{flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between'}, action:{width:'48%',backgroundColor:'#fff',padding:12,borderRadius:12,marginBottom:12,alignItems:'center'} })
