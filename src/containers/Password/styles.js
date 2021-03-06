import { StyleSheet } from 'react-native';

// const colors = {
//   'blue'
// }

export default StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'stretch',
      backgroundColor: '#F5FCFF',
      color: 'black',
      padding: 20,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    text: {
      marginBottom: 10,
      borderColor: 'steelblue',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    button: {
      alignItems: "center",
      backgroundColor: "#1D66E6",
      padding: 10,
      fontWeight: '500',
      borderRadius: 100,
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold'
    }
  });