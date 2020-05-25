import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 3,
      justifyContent: 'center',
      alignItems: 'stretch',
      backgroundColor: '#F5FCFF',
      color: 'black',
    },
    welcome: {
      fontSize: 40,
      textAlign: 'center',
      fontWeight: 'bold',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    form: {
      flex: 3,
      margin: 30,
    },
    text: {
      marginBottom: 10,
      borderColor: 'steelblue',
      borderBottomWidth: 0.5,
    },
    button: {
      borderRadius: 20,
      backgroundColor: 'red',
    }
  });