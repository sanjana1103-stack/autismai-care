import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { saveSession, loadChildProfile } from '../store/storage';

const animals = [ {id:'panda', emoji:'🐼'}, {id:'lion', emoji:'🦁'}, {id:'elephant', emoji:'🐘'}, {id:'bunny', emoji:'🐰'}, {id:'bear', emoji:'🐻'} ];

export default function AnimalHunt({ navigation }: any){
  const [target, setTarget] = useState(animals[1]);
  const [correct, setCorrect] = useState(0);

  async function onPick(a:any){
    if(a.id===target.id){
      setCorrect(c=>c+1);
      if(correct+1>=3){
        const child = await loadChildProfile();
        const session = { activitySessionId: `animal-${child?.id||'demo'}-${Date.now()}`, activityId:'animal', childId:child?.id||'demo', startedAt: new Date().toISOString(), completedAt: new Date().toISOString(), status:'COMPLETED', attempts:3, correctAttempts:3, incorrectAttempts:0, score:100, duration:0 };
        await saveSession(session);
        navigation.replace('ActivityComplete', { activitySessionId: session.activitySessionId });
      }
    }else{
      alert('Try again');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Find the {target.id}</Text>
      <View style={styles.row}>
        {animals.map(a=> (
          <TouchableOpacity key={a.id} style={styles.card} onPress={()=>onPick(a)}>
            <Text style={{fontSize:36}}>{a.emoji}</Text>
            <Text>{a.id}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({ container:{flex:1,padding:16}, title:{fontSize:20,fontWeight:'700'}, row:{flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between',marginTop:12}, card:{backgroundColor:'#fff',padding:12,borderRadius:12,width:'30%',alignItems:'center',marginBottom:12} })
