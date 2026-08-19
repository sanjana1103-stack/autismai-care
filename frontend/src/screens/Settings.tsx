import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { t } from '../i18n';

export default function Settings({ navigation }: any){
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('app.settings','en')}</Text>
      <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('LanguageSelect')}><Text>{t('app.language','en')}</Text></TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({ container:{flex:1,padding:16}, title:{fontSize:20,fontWeight:'700'}, btn:{backgroundColor:'#fff',padding:12,borderRadius:8,marginTop:12}})
