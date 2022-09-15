import { StyleSheet } from 'react-native'

const SharedStyles = StyleSheet.create({
  safeAreaView: {
    flex: 1
  },

  pageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  button: {
    marginVertical: 12,
    padding: 18,
    borderRadius: 15,
    backgroundColor: '#fff'
  },

  buttonLabel: {
    fontSize: 16,
    color: '#000'
  },

  title: {
    fontSize: 21,
    color: '#000'
  },

  input: {
    marginVertical: 12,
    padding: 18,
    borderRadius: 15,
    backgroundColor: '#fff',
    alignSelf: 'center',
    width: '80%',
    fontSize: 18,
    color: '#000'
  }
})

export default SharedStyles
