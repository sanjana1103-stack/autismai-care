import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Splash(){
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>AUTISMAI CARE</Text>
      <Text style={styles.tag}>Learn. Play. Grow. Together.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex:1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' },
  logo: { fontSize: 28, fontWeight: '700' },
  tag: { marginTop: 8 }
})
