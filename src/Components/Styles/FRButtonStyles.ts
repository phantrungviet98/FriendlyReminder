import {StyleSheet} from 'react-native'
import {Colors} from '../../Assets/'

export const Styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 20,
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: 'grey',
    shadowOffset: {height: 0, width: 0},
  },
  content: {
    color: Colors.white_FFFFFF,
  },
})
