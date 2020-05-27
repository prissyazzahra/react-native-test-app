import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
    padding: 20,
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  nakedButton: {
    color: "#1D66E6",
    fontSize: 15,
  },
  repoTitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  avatar: {
    width: 30,
    height: 30,
    marginRight: 5,
  },
  listItemContainer: {
    marginTop: 20,
    marginLeft: 5,
    marginRight: 5,
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  message: {
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  commitDesc: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    padding: 20,
  },
  errorText: {
    marginBottom: 10,
    fontSize: 15,
  }
})