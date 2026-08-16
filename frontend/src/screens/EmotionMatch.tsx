import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { saveSession, loadChildProfile } from '../store/storage';

const emotions = [ {id:'happy', emoji:'😊', label:'Happy'}, {id:'sad', emoji:'😢', label:'Sad'}, {id:'angry', emoji:'😡', label:'Angry'}, {id:'scared', emoji:'😨', label:'Scared'}, {id:'tired', emoji:'😴', label:'Tired'} ];

export default function EmotionMatch({ navigation }: any){
  const [round, setRound] = useState(0);
  const [target, setTarget] = useState(emotions[0]);

  function nextRound(){
    const r = round+1;
    setRound(r);
    setTarget(emotions[r % emotions.length]);
    if(r>=3) onComplete();
  }

  async function onComplete(){
    const child = await loadChildProfile();
    const session = { activitySessionId: `emotion-${child?.id||'demo'}-${Date.now()}`, activityId:'emotion', childId:child?.id||'demo', startedAt: new Date().toISOString(), completedAt: new Date().toISOString(), status:'COMPLETED', attempts:3, correctAttempts:3, incorrectAttempts:0, score:100, duration:0 };
    await saveSession(session);
    navigation.replace('ActivityComplete', { activitySessionId: session.activitySessionId });
  }

  async function onChoose(e:any){
    if(e.id===target.id){
      nextRound();
    }else{
      // gentle retry
      alert('Try again!');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Find: {target.label}</Text>
      <View style={styles.row}>
        {emotions.map(e=> (
          <TouchableOpacity key={e.id} style={styles.card} onPress={()=>onChoose(e)}>
            <Text style={{fontSize:36}}>{e.emoji}</Text>
            <Text>{e.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({ container:{flex:1,padding:16}, title:{fontSize:20,fontWeight:'700'}, row:{flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between',marginTop:12}, card:{backgroundColor:'#fff',padding:12,borderRadius:12,width:'30%',alignItems:'center',marginBottom:12} })
