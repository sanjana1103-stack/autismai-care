import en from './en.json';
import kn from './kn.json';

export const locales = { en, kn };

export type Lang = 'en' | 'kn';

export function t(key: string, lang: Lang = 'en'){
  const parts = key.split('.');
  let cur: any = locales[lang];
  for(const p of parts){
    if(!cur) return key;
    cur = cur[p];
  }
  return cur ?? key;
}
