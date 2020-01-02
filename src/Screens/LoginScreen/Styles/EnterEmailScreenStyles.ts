import {StyleSheet} from 'react-native'
import {Colors} from '../../../Assets'

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapContent: {
    flex: 1,
    paddingVertical: 70,
    paddingHorizontal: 20,
    backgroundColor: Colors.white_FFFFFF,
  },
  wrapTextInput: {
    flex: 2,
    justifyContent: 'center'
  },
  button: {
    backgroundColor: Colors.green_42CA53,
    paddingHorizontal: 20,
    height: 50
  },
  wrapButton: {
    flex: 3,
    alignItems: 'center'
  },
})
