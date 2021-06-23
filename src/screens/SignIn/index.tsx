import React, {useState } from 'react';
import { Text, View, TextInput } from 'react-native';

import { styles } from './styles'

export function SignIn() {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <Text>Mobile Developer</Text>

      <TextInput 
        style={styles.input}
        onChangeText={setText}
      />

      <Text>
        Você digitou: { text }
      </Text>
    </View>
  );
}

