import 'react-native-gesture-handler';
import * as React from 'react';

import { Text, View, Image, FlatList } from 'react-native';

import styles from './styles';

function ListItem({ authorData, user, date, message, committer }) {
  const dateObject = new Date(date)
  const newDate = `${dateObject.getDay()}-${dateObject.getMonth()}-${dateObject.getFullYear()}`

  if (!authorData) {
    return (
      <View style={styles.listItemContainer}>
        <Text style={styles.message} numberOfLines={1}>{message}</Text>
        <Text>{user} authored on {newDate} and commited by {committer}</Text>
      </View>
    );
  }
  return (
    <View style={styles.listItemContainer}>
      <Text style={styles.message} numberOfLines={1}>{message}</Text>
      <View style={styles.commitDesc}>
        <Image style={styles.avatar} source={{ uri: authorData.avatar_url }} />
        <Text>{user} authored on {newDate} and commited by {committer}</Text>
      </View>
    </View>
  );
}

class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
    }
  }

  async fetchRepository() {
    const { repo } = this.props.route.params;
    await fetch(`https://api.github.com/repos/${repo}/commits`)
    .then((response) => response.json())
    .then((json) => {
      return this.setState({ data: json });
    })
    .catch((error) => {
      this.setState({ error })
    });
  }

  componentDidMount() {
    this.fetchRepository();
  }

  render() {
    if (this.state.error) {
      return (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Something went wrong</Text>
          <Text
            style={styles.nakedButton}
            onPress={() => this.props.navigation.navigate("Welcome")}
          >
            Go back
          </Text>
        </View>
      );
    } else if (this.state.data.message === "Not Found") {
      return (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Repository not found.</Text>
          <Text
            style={styles.nakedButton}
            onPress={() => this.props.navigation.navigate("Welcome")}
          >
            Go back
          </Text>
        </View>
      );
    }
    return (
        <View style={styles.container}>
          <View style={styles.box}>
            <Text style={styles.repoTitle}>{this.props.route.params.repo}</Text>
            <Text
              style={styles.nakedButton}
              onPress={() => this.props.navigation.navigate("Login")}
            >
              Logout
            </Text>
          </View>
          <View>
            <FlatList 
              data={this.state.data}
              renderItem={({ item }) => 
                <ListItem 
                  authorData={item.author}
                  user={item.commit.author.name}
                  date={item.commit.author.date}
                  message={item.commit.message}
                  committer={item.committer.login}
                />
              }
              keyExtractor={item => item.sha}
            />
          </View>
        </View>
    );
  }
}

export default List;