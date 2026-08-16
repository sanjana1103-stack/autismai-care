import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { Audio } from 'expo-av';

export default function SpeechPractice({ word = 'DOG', onComplete }: any){
  const [recording, setRecording] = useState<any>(null);
  const [uri, setUri] = useState<string | null>(null);
  const soundRef = useRef<any>(null);

  async function startRecording(){
    try{
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({allowsRecordingIOS: true, playsInSilentModeIOS: true});
      const { recording } = await Audio.Recording.createAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
      setRecording(recording);
    }catch(e){
      console.warn(e);
    }
  }

  async function stopRecording(){
    if(!recording) return;
    await recording.stopAndUnloadAsync();
    const uri = recording.getURI();
    setUri(uri);
    setRecording(null);
  }

  async function play(){
    if(!uri) return;
    const { sound } = await Audio.Sound.createAsync({uri});
    soundRef.current = sound;
    await sound.playAsync();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.prompt}>Say: {word}</Text>
      <View style={styles.controls}>
        <TouchableOpacity onPress={startRecording} style={styles.btn} accessibilityLabel="Start recording">
          <Text>Record</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={stopRecording} style={styles.btn} accessibilityLabel="Stop recording">
          <Text>Stop</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={play} style={styles.btn} accessibilityLabel="Play recording">
          <Text>Play</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { padding: 16, alignItems: 'center' },
  prompt: { fontSize: 20, marginBottom: 12 },
  controls: { flexDirection: 'row', gap: 8 },
  btn: { backgroundColor: '#fff', padding: 10, borderRadius: 8, marginHorizontal: 6 }
})
