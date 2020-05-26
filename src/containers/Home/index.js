import 'react-native-gesture-handler';
import * as React from 'react';

import { Text, View, TouchableOpacity, TextInput } from 'react-native';

import styles from './styles';

export default function Home() {
  return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome</Text>
        <Text style={styles.instructions}>Please enter your GitHub username.</Text>
        <View>
          <TextInput style={styles.text}>Username</TextInput>
          <TouchableOpacity
            style={styles.button}
          >
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
}
