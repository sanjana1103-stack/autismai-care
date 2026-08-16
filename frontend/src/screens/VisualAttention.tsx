import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { saveSession, loadChildProfile } from '../store/storage';

const positions = [{left:'10%',top:'10%'},{left:'70%',top:'15%'},{left:'40%',top:'60%'},{left:'15%',top:'50%'},{left:'75%',top:'65%'}];

export default function VisualAttention({ navigation }: any){
  const [round, setRound] = useState(0);
  const total = 5;
  const [child, setChild] = useState<any>(null);

  useEffect(()=>{ loadChildProfile().then(c=>setChild(c)); },[]);

  function onHit(){
    const next = round+1;
    setRound(next);
    if(next>=total) onComplete(next);
  }

  async function onComplete(final:number){
    const session = { activitySessionId: `visual-${child?.id||'demo'}-${Date.now()}`, activityId:'visual', childId:child?.id||'demo', startedAt: new Date().toISOString(), completedAt: new Date().toISOString(), status:'COMPLETED', attempts:final, correctAttempts:final, incorrectAttempts:0, score:100, duration:0 };
    await saveSession(session);
    navigation.replace('ActivityComplete', { activitySessionId: session.activitySessionId });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Visual Attention Practice</Text>
      <Text style={{marginTop:8}}>Rounds: {round} / {total}</Text>
      <View style={{flex:1}}>
        {positions.map((p,i)=> (
          <TouchableOpacity key={i} style={[styles.target,{left: p.left, top: p.top}]} onPress={onHit} accessibilityLabel={`Lumi ${i}`}>
            <Text style={{fontSize:32}}>⭐</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({ container:{flex:1,padding:16}, title:{fontSize:20,fontWeight:'700'}, target:{position:'absolute',backgroundColor:'#fff',padding:12,borderRadius:40,width:80,height:80,alignItems:'center',justifyContent:'center'} })
