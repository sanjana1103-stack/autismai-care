import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { t } from '../i18n';
import { saveSession, loadChildProfile } from '../store/storage';

export default function BubblePop({ navigation, route }: any){
  const [pops, setPops] = useState(0);
  const goal = 10;
  const startTimeRef = useRef<number | null>(null);
  const [child, setChild] = useState<any>(null);

  useEffect(()=>{ loadChildProfile().then(c=>setChild(c)); },[]);

  function onStart(){ startTimeRef.current = Date.now(); }

  function onPop(){
    setPops(p=>{
      const next = p+1;
      if(next>=goal){
        onComplete(next);
      }
      return next;
    })
  }

  async function onComplete(finalPops:number){
    const duration = startTimeRef.current ? (Date.now()-startTimeRef.current)/1000 : 0;
    const session = {
      activitySessionId: `bubble-${child?.id ?? 'demo'}-${Date.now()}`,
      activityId: 'bubble',
      childId: child?.id ?? 'demo',
      startedAt: new Date().toISOString(),
      completedAt: new Date().toISOString(),
      status: 'COMPLETED',
      attempts: finalPops,
      correctAttempts: finalPops,
      incorrectAttempts: 0,
      score: Math.min(100, Math.round((finalPops/goal)*100)),
      duration
    };
    await saveSession(session);
    navigation.replace('ActivityComplete', { activitySessionId: session.activitySessionId, stars: 3, coins: 5 });
  }

  function onExit(){
    Alert.alert(t('app.confirm_exit','en'), t('app.confirm_exit','en'), [ {text:t('app.cancel','en')},{text:t('app.yes','en'), onPress: ()=> navigation.goBack() } ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('app.bubbles_goal','en')}</Text>
      <View style={{height:20}} />
      <Text style={styles.counter}>{pops} / {goal} {t('app.pops','en')}</Text>
      <View style={{height:20}} />
      <TouchableOpacity style={styles.bubble} onPress={()=>{ if(pops===0) onStart(); onPop(); }} accessibilityLabel="bubble-button">
        <Text style={{fontSize:32}}>🔵</Text>
      </TouchableOpacity>
      <View style={{height:20}} />
      <TouchableOpacity style={styles.exit} onPress={onExit}><Text>{t('app.exit','en')}</Text></TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({ container:{flex:1,alignItems:'center',padding:16,backgroundColor:'#F7FBFF'}, title:{fontSize:20,fontWeight:'700'}, counter:{fontSize:18,marginTop:8}, bubble:{backgroundColor:'#fff',padding:24,borderRadius:100,alignItems:'center',justifyContent:'center',elevation:4}, exit:{marginTop:20} })
