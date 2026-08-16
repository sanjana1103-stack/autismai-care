import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { Audio } from 'expo-av';
import { saveSession, loadChildProfile } from '../store/storage';

export default function SpeechMirror({ navigation }: any){
  const [recording, setRecording] = useState<any>(null);
  const [uri, setUri] = useState<string | null>(null);
  const [child, setChild] = useState<any>(null);
  const target = 'BA';

  useEffect(()=>{ loadChildProfile().then(c=>setChild(c)); },[]);

  async function startRecording(){
    try{
      const { status } = await Audio.requestPermissionsAsync();
      if(status!=='granted') return;
      await Audio.setAudioModeAsync({allowsRecordingIOS:true,playsInSilentModeIOS:true});
      const rec = new Audio.Recording();
      await rec.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
      await rec.startAsync();
      setRecording(rec);
    }catch(e){ console.warn(e); }
  }
  async function stopRecording(){
    if(!recording) return;
    await recording.stopAndUnloadAsync();
    const u = recording.getURI();
    setUri(u);
    setRecording(null);
  }
  async function play(){
    if(!uri) return;
    const { sound } = await Audio.Sound.createAsync({ uri });
    await sound.playAsync();
  }

  async function onComplete(){
    const session = { activitySessionId: `speech-${child?.id||'demo'}-${Date.now()}`, activityId:'speech', childId:child?.id||'demo', startedAt: new Date().toISOString(), completedAt: new Date().toISOString(), status:'COMPLETED', attempts:1, correctAttempts:1, incorrectAttempts:0, score:100, duration:0 };
    await saveSession(session);
    navigation.replace('ActivityComplete', { activitySessionId: session.activitySessionId });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Speech Practice</Text>
      <Text style={{marginTop:8}}>Say: {target}</Text>
      <View style={{height:16}} />
      <TouchableOpacity style={styles.btn} onPress={startRecording}><Text>Record</Text></TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={stopRecording}><Text>Stop</Text></TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={play}><Text>Play</Text></TouchableOpacity>
      <View style={{height:16}} />
      <TouchableOpacity style={[styles.btn,{backgroundColor:'#7C4DFF'}]} onPress={onComplete}><Text style={{color:'#fff'}}>Finish</Text></TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({ container:{flex:1,padding:16,alignItems:'center'}, title:{fontSize:20,fontWeight:'700'}, btn:{padding:12,backgroundColor:'#fff',borderRadius:8,marginTop:8,width:180,alignItems:'center'} })
