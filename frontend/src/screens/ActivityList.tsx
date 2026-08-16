import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { t } from '../i18n';

const ACTIVITIES = [
  { id:'bubble', title:'Bubble Pop', category:'Attention' },
  { id:'visual', title:'Visual Attention', category:'Social' },
  { id:'speech', title:'Speech Mirror', category:'Speech' },
  { id:'emotion', title:'Emotion Match', category:'Behaviour' }
];

export default function ActivityList({ navigation, route }: any){
  const lang = route?.params?.lang ?? 'en';
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{t('app.play_now', lang)}</Text>
      <FlatList data={ACTIVITIES} keyExtractor={i=>i.id} renderItem={({item})=> (
        <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate('BubblePop', { activityId: item.id })}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.category}>{item.category}</Text>
        </TouchableOpacity>
      )} />
    </View>
  )
}

const styles = StyleSheet.create({ container:{flex:1,padding:16}, header:{fontSize:20,fontWeight:'700',marginBottom:12}, card:{backgroundColor:'#fff',padding:12,borderRadius:12,marginBottom:12}, title:{fontSize:16,fontWeight:'700'}, category:{color:'#666',marginTop:6}})
