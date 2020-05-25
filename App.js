import * as React from 'react';
import { Platform, Text, View, Button, TextInput } from 'react-native';

import styles from './Styles';

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

export default function App() {
  return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome</Text>
        <Text style={styles.instructions}>Please enter your GitHub username.</Text>
        <View style={styles.form}>
          <TextInput style={styles.text}>Username</TextInput>
          <Button style={styles.button} title="Submit" />
        </View>
      </View>
  );
}
