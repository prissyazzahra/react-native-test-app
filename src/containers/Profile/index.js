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
    await fetch(`https://api.github.com/users/${user}`)
    .then((response) => response.json())
    .then((json) => {
      return this.setState({ data: json });
    })
    .catch((error) => {
      this.setState({ error })
    });
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
          <Text style={styles.errorText}>Something went wrong</Text>
          <Text
            style={styles.nakedButton}
            onPress={() => this.props.navigation.navigate("Login")}
          >
            Go back
          </Text>
        </View>
      );
    } else if (this.state.data.message === "Not Found") {
      return (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>User not found.</Text>
          <Text
            style={styles.nakedButton}
            onPress={() => this.props.navigation.navigate("Login")}
          >
            Go back
          </Text>
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
            onChangeText={repo => this.setState({ repo })}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate(('Commit List'), { repo: this.state.repo })}
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
