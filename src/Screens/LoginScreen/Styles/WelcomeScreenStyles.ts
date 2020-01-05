import {StyleSheet} from 'react-native'
import {Colors, Normalize, ApplicationStyles} from '../../../Assets'

export const Styles = StyleSheet.create({
  ...ApplicationStyles,
  button1: {
    backgroundColor: Colors.green_42CA53,
    width: Normalize(250),
    height: Normalize(50),
  },
  button2: {
    backgroundColor: Colors.blue_053AFD,
    width: Normalize(250),
    height: Normalize(50),
  },
  button3: {
    backgroundColor: Colors.red_FD1814,
    width: Normalize(250),
    height: Normalize(50),
  },
  wrapBody: {
    marginTop: Normalize(50),
    flex: 4,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  skip: {
    marginTop: Normalize(30),
    flex: 4,
    textDecorationLine: 'underline',
    alignSelf: 'center',
  },
})
