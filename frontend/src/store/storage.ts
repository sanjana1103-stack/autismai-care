import AsyncStorage from '@react-native-async-storage/async-storage';

const CHILD_KEY = 'AUTISMAI_CHILD';
const SETTINGS_KEY = 'AUTISMAI_SETTINGS';
const SESSIONS_KEY = 'AUTISMAI_SESSIONS';
const STATS_KEY = 'AUTISMAI_STATS';
const REWARDS_KEY = 'AUTISMAI_REWARDS';

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
  return s ? JSON.parse(s) : { lang: 'en', sound: true, vibration: true, reducedMotion:false };
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

export async function loadStats(){
  const s = await AsyncStorage.getItem(STATS_KEY);
  return s ? JSON.parse(s) : { stars:0, coins:0, streak:0, lastCompletionDate: null };
}

export async function saveStats(stats:any){
  await AsyncStorage.setItem(STATS_KEY, JSON.stringify(stats));
}

export async function awardRewards(activitySessionId:string, stars:number, coins:number){
  // ensure single issuance
  const rewardsS = await AsyncStorage.getItem(REWARDS_KEY);
  const rewards = rewardsS ? JSON.parse(rewardsS) : [];
  if(rewards.find((r:any)=>r.activitySessionId===activitySessionId)) return false;
  rewards.push({ activitySessionId, stars, coins, date: new Date().toISOString() });
  await AsyncStorage.setItem(REWARDS_KEY, JSON.stringify(rewards));
  // increment stats
  const stats = await loadStats();
  stats.stars = (stats.stars||0) + stars;
  stats.coins = (stats.coins||0) + coins;
  const today = new Date().toISOString().slice(0,10);
  if(stats.lastCompletionDate !== today){
    // simple streak increment
    stats.streak = (stats.streak||0) + 1;
    stats.lastCompletionDate = today;
  }
  await saveStats(stats);
  return true;
}

export async function loadRewards(){
  const s = await AsyncStorage.getItem(REWARDS_KEY);
  return s ? JSON.parse(s) : [];
}
