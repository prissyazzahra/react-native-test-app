import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  errorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    padding: 20,
  },
  image: {
    borderRadius: 100 / 2,
    width: 100,
    height: 100,
    marginTop: 10,
    marginBottom: 10,
  },
  card: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    margin: 20,
    transform: [{ translateY: -50 }],
    alignItems: 'stretch',
  },
  box: {
    padding: 20,
    backgroundColor: '#3B424E',
  },
  text: {
    borderColor: 'steelblue',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 10,
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
  },
});