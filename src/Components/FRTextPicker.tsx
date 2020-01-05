import React from 'react'
import {StyleSheet, View, TouchableOpacity} from 'react-native'
import {Colors, Normalize} from '../Assets'
import Icon from 'react-native-vector-icons/AntDesign'
import {FRText} from './index'

export interface Props {
  style?: any
  onPressRight?: () => void
}

export const FRTextPicker: React.FC<Props> = ({onPressRight, style, children}) => {

  return (
    <View style={[styles.container, style]}>
      <FRText style={styles.input}>{children ? children : 'Gender'}</FRText>
      <TouchableOpacity style={styles.touchableRight} onPress={onPressRight}>
        <Icon name={'caretup'} size={20} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: Normalize(24),
    borderBottomWidth: 1,
  },
  input: {
    paddingBottom: Normalize(5),
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: Normalize(10),
    color: Colors.gray_7E7E7F,
    marginBottom: Normalize(6),
  },
  touchableRight: {
    marginTop: Normalize(12),
    position: 'absolute',
    right: 4,
    bottom: 4,
  },
})
