import {StyleSheet} from 'react-native'
import {Colors} from '../../../Assets'

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 70,
    paddingHorizontal: 20,
    backgroundColor: Colors.white_FFFFFF
  },
  button1: {
    backgroundColor: Colors.green_42CA53,
    width: 250,
    height: 50,
  },
  button2: {
    backgroundColor: Colors.blue_053AFD,
    width: 250,
    height: 50,
  },
  button3: {
    backgroundColor: Colors.red_FD1814,
    width: 250,
    height: 50,
  },
  wrapBody: {
    marginTop: 50,
    flex: 4,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  skip: {
    marginTop: 30,
    flex: 4,
    textDecorationLine: 'underline',
    alignSelf: 'center'
  }
})