import 'react-native-gesture-handler';
import * as React from 'react';

import { Text, View, TouchableOpacity, TextInput } from 'react-native';

import styles from './styles';

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      error: '',
    }
  }

  async fetchProfile() {
    const user = this.props.route.params.username;
    return fetch(`https://api.github.com/users/${user}`)
      .then(res => res.json())
      .then(json => {
        this.setState({ data: json });
      })
      .catch(error => {
        this.state({ error });
      });
  }

  componentDidMount() {
    this.fetchProfile();
  }

  render() {
    if (this.state.error) {
      return (
        <View>
          <Text>Something went wrong with error of {this.state.error}</Text>
        </View>
      );
    }
    return (
      <View>
        <Text>What's here?</Text>
      </View>
    );
  }
}

export default Profile;
