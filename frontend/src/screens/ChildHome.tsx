import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import Companion from '../components/Companion';
import MatchingActivity from '../components/MatchingActivity';

export default function ChildHome(){
  function onComplete(data: any){
    console.log('activity complete', data);
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle='dark-content' />
      <View style={styles.header}>
        <Companion name="Panda" />
        <Text style={styles.greeting}>Hi! Let's play!</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Today's Adventure</Text>
        <Text>3 activities • 2 rewards</Text>
      </View>

      <View style={styles.activityCard}>
        <Text style={styles.sectionTitle}>Choose an activity</Text>
        <View style={{height: 16}} />
        <MatchingActivity question={"Find the Panda"} options={["Panda","Cat","Dog"]} correct={'Panda'} onComplete={onComplete} />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#F7FBFF' },
  header: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  greeting: { fontSize: 22, fontWeight: '600' },
  card: { backgroundColor: '#fff', padding: 12, borderRadius: 12, marginTop: 12 },
  title: { fontSize: 18, fontWeight: '600' },
  activityCard: { marginTop: 20 }
})
