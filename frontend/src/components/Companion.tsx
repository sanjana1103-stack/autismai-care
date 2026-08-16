import React from 'react';
import { GestureResponderEvent } from 'react-native';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function Companion({ name = 'Panda', onPress }: { name?: string; onPress?: (e: GestureResponderEvent) => void }){
  const emoji = name === 'Panda' ? '🐼' : name === 'Bunny' ? '🐰' : name === 'Cat' ? '🐱' : '⭐';
  return (
    <TouchableOpacity onPress={onPress} style={styles.container} accessibilityLabel={`Companion ${name}`}>
      <Text style={styles.emoji}>{emoji}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', justifyContent: 'center', padding: 8 },
  emoji: { fontSize: 48 }
})
