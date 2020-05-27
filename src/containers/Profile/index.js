import 'react-native-gesture-handler';
import * as React from 'react';

import { Text, View, Image, TouchableOpacity, TextInput, BackHandler, ToastAndroid } from 'react-native';

import styles from './styles';

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      error: '',
      repo: 'facebook/react-native',
    }
  }
  
  handleBackButton = () => {
    ToastAndroid.show("Please log out to go back.", ToastAndroid.SHORT);
    return true;
  }

  async fetchProfile() {
    const user = this.props.route.params.username;
    return fetch(`https://api.github.com/users/${user}`)
      .then(res => res.json())
      .then(json => {
        this.setState({ data: json })
      })
      .catch(error => {
        this.state({ error })
        throw error;
      })
  }

  componentDidMount() {
    this.fetchProfile()
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  render() {
    if (this.state.error) {
      return (
        <View style={styles.errorContainer}>
          <Text>Something went wrong with error of {this.state.error}</Text>
          <Text>Go back</Text>
        </View>
      );
    } else if (this.state.data.message && this.state.data.message === "Not Found") {
      return (
        <View style={styles.errorContainer}>
          <Text>User not found.</Text>
          <Text>Go back</Text>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.profileText}>Hello, {this.state.data.login}!</Text>
          <Image
            style={styles.image}
            source={{
              uri: this.state.data.avatar_url
            }}
          />
        </View>
        <View style={styles.card}>
          <Text>To look for commits, enter a GitHub repository.</Text>
          <TextInput
            style={styles.text}
            defaultValue="facebook/react-native" 
            onChangeText={e => this.setState({ repo: e.target.value })}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate(('Welcome'), { username })}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.flex}>
          <Text
            style={styles.nakedButton}
            onPress={() => this.props.navigation.navigate("Login")}
          >
            Logout
          </Text>
        </View>
      </View>
    );
  }
}

export default Profile;
