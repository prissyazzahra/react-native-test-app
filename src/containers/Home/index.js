import 'react-native-gesture-handler';
import * as React from 'react';

import { Text, View, TouchableOpacity, TextInput } from 'react-native';

import styles from './styles';

export default function Home({ navigation }) {
  return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome</Text>
        <Text style={styles.instructions}>Please enter your GitHub username.</Text>
        <View>
          <TextInput placeholder="Username" textContentType="username" style={styles.text} />
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Password')}
          >
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
}
