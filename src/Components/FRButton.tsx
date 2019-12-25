import React from 'react'
import {TouchableOpacity, Text} from 'react-native'
import {Styles} from './Styles/FRButtonStyles'

export interface Props {
  style: React.CSSProperties,
  title: string,
  onPress?: () => any
}

export const FRButton = ({style, title, onPress}: Props) => {
  return (
    <TouchableOpacity style={[style, Styles.container]} onPress={onPress}>
      <Text style={Styles.content}>{title}</Text>
    </TouchableOpacity>
  )
}
