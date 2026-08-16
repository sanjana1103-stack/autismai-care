import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function MatchingActivity({ question = 'Find the Panda', options = ['Panda','Cat','Dog'], correct = 'Panda', onComplete }: any){
  const [selected, setSelected] = useState<string | null>(null);
  const [attempts, setAttempts] = useState(0);

  function choose(opt: string){
    setSelected(opt);
    setAttempts(a=>a+1);
    const isCorrect = opt === correct;
    if(isCorrect){
      Alert.alert('Great job!', 'You found the panda!');
      onComplete && onComplete({attempts: attempts+1, correct: 1, incorrect: attempts - (isCorrect?0:1)});
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{question}</Text>
      <View style={styles.row}>
        {options.map(o=> (
          <TouchableOpacity key={o} style={styles.card} onPress={()=>choose(o)} accessibilityLabel={`Option ${o}`}>
            <Text style={styles.cardText}>{o === 'Panda' ? '🐼' : o === 'Cat' ? '🐱' : '🐶'}</Text>
            <Text style={styles.cardLabel}>{o}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { padding: 16, alignItems: 'center'},
  question: { fontSize: 20, marginBottom: 12},
  row: { flexDirection: 'row', justifyContent: 'space-around', width: '100%'},
  card: { backgroundColor: '#fff', padding: 12, borderRadius: 12, alignItems: 'center', width: 100, elevation: 2},
  cardText: { fontSize: 36 },
  cardLabel: { marginTop: 8 }
})
