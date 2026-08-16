import AsyncStorage from '@react-native-async-storage/async-storage';

const CHILD_KEY = 'AUTISMAI_CHILD';
const SETTINGS_KEY = 'AUTISMAI_SETTINGS';
const SESSIONS_KEY = 'AUTISMAI_SESSIONS';

export async function saveChildProfile(profile: any){
  await AsyncStorage.setItem(CHILD_KEY, JSON.stringify(profile));
}
export async function loadChildProfile(){
  const s = await AsyncStorage.getItem(CHILD_KEY);
  return s ? JSON.parse(s) : null;
}

export async function saveSettings(settings: any){
  await AsyncStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
}
export async function loadSettings(){
  const s = await AsyncStorage.getItem(SETTINGS_KEY);
  return s ? JSON.parse(s) : { lang: 'en' };
}

export async function saveSession(session: any){
  const listS = await AsyncStorage.getItem(SESSIONS_KEY);
  const list = listS ? JSON.parse(listS) : [];
  // idempotent by activitySessionId
  if(!list.find((x:any)=>x.activitySessionId===session.activitySessionId)){
    list.push(session);
    await AsyncStorage.setItem(SESSIONS_KEY, JSON.stringify(list));
  }
}

export async function loadSessions(){
  const s = await AsyncStorage.getItem(SESSIONS_KEY);
  return s ? JSON.parse(s) : [];
}
