import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { t } from '../i18n';

export default function RoleSelect({ navigation, route }: any){
  const lang = route?.params?.lang ?? 'en';
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('app.role', lang)}</Text>
      <View style={{height:12}} />
      <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('ChildProfileSetup',{lang})}>
        <Text>{t('app.child', lang)}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('Login',{lang, role:'parent'})}>
        <Text>{t('app.parent', lang)}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({ container:{flex:1,alignItems:'center',justifyContent:'center'}, title:{fontSize:20}, btn:{backgroundColor:'#fff',padding:12,margin:8,borderRadius:8}})
