import 'react-native-gesture-handler';
import * as React from 'react';

import { Text, View, TouchableOpacity, TextInput } from 'react-native';

import styles from './styles';

export default function Password({ navigation, route }) {
  const [password, setPassword] = React.useState('');
  const { username } = route.params;

  return (
      <View style={styles.container}>
        <Text style={styles.instructions}>Please enter your GitHub password.</Text>
        <View>
          <TextInput placeholder="Password" textContentType="password" secureTextEntry={true} style={styles.text} />
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate(('Welcome'), { username })}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
}
