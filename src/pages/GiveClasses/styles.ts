import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8257e5',
    justifyContent: 'center',
    padding: 40,
  },
  content: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    lineHeight: 35,
    maxWidth: 180,
  },
  description: {
    marginTop: 24,
    color: '#d4c2ff',
    fontSize: 16,
    lineHeight: 26,
    maxWidth: 240
  },
  okButton: {
    marginVertical: 40,
    backgroundColor: '#04d361',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8
  },
  okButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  }
})

export default styles