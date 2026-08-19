import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { t } from '../i18n';
import { Lang } from '../i18n';

export default function LanguageSelect({ navigation, route }: any){
  const [lang, setLang] = React.useState<Lang>('en');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('app.select_language', lang)}</Text>
      <TouchableOpacity style={styles.btn} onPress={() => { setLang('en'); navigation.navigate('RoleSelect', { lang: 'en' }); }}>
        <Text>English</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => { setLang('kn'); navigation.navigate('RoleSelect', { lang: 'kn' }); }}>
        <Text>ಕನ್ನಡ</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex:1, alignItems:'center', justifyContent:'center' },
  title: { fontSize:20, marginBottom:16 },
  btn: { backgroundColor:'#fff', padding:12, margin:8, borderRadius:8 }
})
