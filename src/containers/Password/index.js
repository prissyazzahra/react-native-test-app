import 'react-native-gesture-handler';
import * as React from 'react';

import { Text, View, TouchableOpacity, TextInput, ToastAndroid } from 'react-native';

import styles from './styles';

class Password extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      password: '',
    }
  }

  handleSubmit = () => {
    const { username } = this.props.route.params;

    if (!this.state.password) {
      return ToastAndroid.show("Please enter your password.", ToastAndroid.SHORT);
    } else if (this.state.password.length < 8) {
      return ToastAndroid.show("Invalid password.", ToastAndroid.SHORT);
    }
    return this.props.navigation.navigate(('Welcome'), { username })
  }
  render() {
  
    return (
        <View style={styles.container}>
          <Text style={styles.instructions}>Please enter your GitHub password.</Text>
          <View>
            <TextInput 
              onChangeText={e => this.setState({ password: e })}
              placeholder="Password"
              textContentType="password"
              secureTextEntry={true}
              style={styles.text}  
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.handleSubmit()}
            >
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
    );
  }
}

export default Password;
