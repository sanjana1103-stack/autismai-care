import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { saveSession, loadChildProfile } from '../store/storage';

export default function InstructionFollowing({ navigation }: any){
  const steps = ['Tap the red', 'Then tap the elephant'];
  const [step, setStep] = useState(0);

  function onAction(name:string){
    if(step===0 && name==='red') setStep(1);
    else if(step===1 && name==='elephant') onComplete();
    else alert('Try the correct item');
  }

  async function onComplete(){
    const child = await loadChildProfile();
    const session = { activitySessionId: `instr-${child?.id||'demo'}-${Date.now()}`, activityId:'instruction', childId:child?.id||'demo', startedAt: new Date().toISOString(), completedAt: new Date().toISOString(), status:'COMPLETED', attempts:2, correctAttempts:2, incorrectAttempts:0, score:100, duration:0 };
    await saveSession(session);
    navigation.replace('ActivityComplete', { activitySessionId: session.activitySessionId });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Instruction Following</Text>
      <Text style={{marginTop:8}}>{steps[step]}</Text>
      <View style={styles.row}>
        <TouchableOpacity style={[styles.card,{backgroundColor:'#ff8080'}]} onPress={()=>onAction('red')}><Text>🔴</Text></TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={()=>onAction('elephant')}><Text>🐘</Text></TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={()=>onAction('blue')}><Text>🔵</Text></TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({ container:{flex:1,padding:16}, title:{fontSize:20,fontWeight:'700'}, row:{flexDirection:'row',justifyContent:'space-around',marginTop:16}, card:{backgroundColor:'#fff',padding:18,borderRadius:12,alignItems:'center'} })
