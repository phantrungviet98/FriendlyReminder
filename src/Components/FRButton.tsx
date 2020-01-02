import React from 'react'
import {TouchableOpacity, Text, StyleSheet} from 'react-native'
import {Colors, Normalize} from '../Assets'

export interface Props {
  style?: any,
  title: string,
  onPress?: () => any
}

export const FRButton = ({style, title, onPress}: Props) => {
  return (
    <TouchableOpacity style={[style, styles.container]} onPress={onPress}>
      <Text style={styles.content}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 20,
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: 'grey',
    shadowOffset: {height: 0, width: 0},
    backgroundColor: Colors.purple_4856FF,
    height: Normalize(40),
  },
  content: {
    color: Colors.white_FFFFFF,
  },
})
