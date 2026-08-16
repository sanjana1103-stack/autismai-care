import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { saveChildProfile } from '../store/storage';
import { t } from '../i18n';

export default function Login({ navigation, route }: any){
  const lang = route?.params?.lang ?? 'en';
  const [email, setEmail] = useState('parent@autismai.care');
  const [password, setPassword] = useState('demo123');

  function onLogin(){
    // demo frictionless login -> go to parent dashboard
    navigation.reset({ index:0, routes:[{name:'ChildHome'}]});
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('app.welcome', lang)}</Text>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry style={styles.input} />
      <TouchableOpacity style={styles.btn} onPress={onLogin}>
        <Text style={{color:'#fff'}}>{t('app.continue', lang)}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({ container:{flex:1,alignItems:'center',justifyContent:'center',padding:16}, title:{fontSize:20,marginBottom:12}, input:{width:'100%',padding:12,backgroundColor:'#fff',borderRadius:8,marginBottom:8}, btn:{backgroundColor:'#7C4DFF',padding:12,borderRadius:8,width:'100%',alignItems:'center'}})
