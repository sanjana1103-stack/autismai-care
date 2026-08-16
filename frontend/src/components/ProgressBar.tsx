import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, Spacing, Radii } from '../theme';

export default function ProgressBar({ value = 0, max = 100 }: { value?: number; max?: number }){
  const pct = Math.min(1, Math.max(0, value / max));
  return (
    <View style={styles.container} accessibilityRole="progressbar" accessibilityValue={{min:0,max}}>
      <View style={[styles.track]}>
        <View style={[styles.fill,{flex: pct}]} />
        <View style={{flex: 1-pct}} />
      </View>
      <Text style={styles.label}>{Math.round(pct*100)}%</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{width:'100%',alignItems:'center'},
  track:{flexDirection:'row',height:14,backgroundColor:'#E8EEF8',borderRadius:12,overflow:'hidden',width:'90%'},
  fill:{backgroundColor:Colors.purple},
  label:{marginTop:8,color:Colors.text}
})
