import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, PanResponder } from 'react-native';
import { saveSession, loadChildProfile } from '../store/storage';

export default function SandDrawing({ navigation }: any){
  const [strokes, setStrokes] = useState<any[]>([]);
  const current = useRef<any>([]);

  const pan = PanResponder.create({
    onStartShouldSetPanResponder: ()=>true,
    onPanResponderGrant: (e,gs)=>{
      current.current = [{x: gs.x0, y: gs.y0}];
      setStrokes(s=>[...s, current.current]);
    },
    onPanResponderMove: (e,gs)=>{
      current.current.push({x: gs.moveX, y: gs.moveY});
      setStrokes(s=>[...s.slice(0,-1), current.current]);
    },
    onPanResponderRelease: ()=>{}
  });

  async function onComplete(){
    const child = await loadChildProfile();
    if(strokes.length===0){ alert('Try drawing a little!'); return; }
    const session = { activitySessionId: `sand-${child?.id||'demo'}-${Date.now()}`, activityId:'sand', childId:child?.id||'demo', startedAt: new Date().toISOString(), completedAt: new Date().toISOString(), status:'COMPLETED', attempts:1, correctAttempts:1, incorrectAttempts:0, score:100, duration:0 };
    await saveSession(session);
    navigation.replace('ActivityComplete', { activitySessionId: session.activitySessionId });
  }

  return (
    <View style={{flex:1}}>
      <View style={styles.canvas} {...pan.panHandlers}>
        {strokes.map((stroke,si)=> (
          <View key={si} style={{position:'absolute',left:0,top:0}}>
            {stroke.map((p:any,pi:number)=> (
              <View key={pi} style={{position:'absolute',width:6,height:6,left:p.x-6,top:p.y-140,backgroundColor:'#7C4DFF',borderRadius:3}} />
            ))}
          </View>
        ))}
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-around',padding:12}}>
        <TouchableOpacity style={styles.btn} onPress={()=>setStrokes([])}><Text>Clear</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.btn,{backgroundColor:'#7C4DFF'}]} onPress={onComplete}><Text style={{color:'#fff'}}>Finish</Text></TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({ canvas:{flex:1,backgroundColor:'#FFF7',borderRadius:12,margin:12}, btn:{padding:12,backgroundColor:'#fff',borderRadius:8} })
