import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8257e5',
    justifyContent: 'center',
    padding: 40,
  },
  banner: {
    width: '100%',
    resizeMode: 'contain',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    lineHeight: 30,
    marginTop: 80
  },
  titleBold: {
    fontWeight: 'bold',
  },
  buttonsConatiner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40
  },
  button: {
    height: 150,
    width: '48%',
    borderRadius: 8,
    padding: 24,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  buttonPrimary: {
    backgroundColor: '#9171f5'
  },
  buttonSecondary:{
    backgroundColor: '#04d361'
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  totalConnections: {
    color: '#d4c2ff',
    fontSize: 12,
    lineHeight: 20,
    maxWidth: 140,
    marginTop: 40
  }
})

export default styles