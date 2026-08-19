import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Picker } from 'react-native';
import { saveChildProfile } from '../store/storage';
import { t } from '../i18n';

export default function ChildProfileSetup({ navigation, route }: any){
  const lang = route?.params?.lang ?? 'en';
  const [name, setName] = useState('Aarav');
  const [age, setAge] = useState('4');
  const [companion, setCompanion] = useState('Panda');

  async function onSave(){
    const profile = { id: 'demo-child-1', name, age: Number(age), companion };
    await saveChildProfile(profile);
    navigation.reset({ index:0, routes:[{name:'ChildHome'}]});
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('app.enter_name', lang)}</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />
      <Text style={{marginTop:8}}>{t('app.age', lang)}</Text>
      <TextInput style={styles.input} value={age} onChangeText={setAge} keyboardType='numeric' />
      <Text style={{marginTop:8}}>{t('app.select_companion', lang)}</Text>
      <View style={{flexDirection:'row',marginTop:8}}>
        {['Panda','Elephant','Lion','Bunny','Bear'].map(c=> (
          <TouchableOpacity key={c} style={[styles.companion, companion===c && {borderColor:'#7C4DFF'}]} onPress={()=>setCompanion(c)}>
            <Text style={{fontSize:24}}>{c==='Panda'?'🐼':c==='Elephant'?'🐘':c==='Lion'?'🦁':c==='Bunny'?'🐰':'🐻'}</Text>
            <Text>{c}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.btn} onPress={onSave}>
        <Text style={{color:'#fff'}}>{t('app.save', lang)}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({ container:{flex:1,padding:16}, title:{fontSize:20,fontWeight:'700'}, input:{backgroundColor:'#fff',padding:10,borderRadius:8,marginTop:8}, companion:{padding:10,backgroundColor:'#fff',marginRight:8,borderRadius:8,alignItems:'center',borderWidth:1,borderColor:'#eee'}, btn:{backgroundColor:'#7C4DFF',padding:12,marginTop:20,borderRadius:8,alignItems:'center'}})
