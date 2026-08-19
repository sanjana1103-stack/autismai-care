import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';

export default function SensoryCalm({ navigation }: any){
  const [running, setRunning] = useState(false);
  const anim = useRef(new Animated.Value(1)).current;

  useEffect(()=>{ if(running){ Animated.loop(Animated.sequence([Animated.timing(anim,{toValue:1.6,duration:2000,useNativeDriver:true}),Animated.timing(anim,{toValue:1,duration:2000,useNativeDriver:true}) ])).start(); }else{ anim.stopAnimation(); anim.setValue(1); } },[running]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sensory Calm</Text>
      <Animated.View style={[styles.circle,{transform:[{scale:anim}]}]} />
      <TouchableOpacity style={[styles.btn,{backgroundColor: running? '#ff8080':'#7C4DFF'}]} onPress={()=>setRunning(r=>!r)}><Text style={{color:'#fff'}}>{running? 'Stop':'Start'}</Text></TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({ container:{flex:1,alignItems:'center',justifyContent:'center'}, title:{fontSize:20,fontWeight:'700'}, circle:{width:180,height:180,borderRadius:90,backgroundColor:'#FFD166',margin:24}, btn:{padding:12,borderRadius:8} })
