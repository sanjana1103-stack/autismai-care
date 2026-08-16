import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Onboarding({ navigation }: any){
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to AutismAI Care</Text>
      <Text style={styles.body}>Personalized activities to support practice at home. Not a diagnostic tool.</Text>
      <TouchableOpacity style={styles.btn} onPress={()=>navigation?.navigate('ChildHome')}>
        <Text style={{color: '#fff'}}>Go to Demo Child Home</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex:1, padding: 16, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 20, fontWeight: '700' },
  body: { marginTop: 12, textAlign: 'center' },
  btn: { marginTop: 20, backgroundColor: '#1E90FF', padding: 12, borderRadius: 8 }
})
