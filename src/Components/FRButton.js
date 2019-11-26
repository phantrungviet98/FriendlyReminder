import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import {Styles} from './Styles/FRButtonStyles'


export const FRButton = ({style, title, onPress}) => {
  return (
    <TouchableOpacity style={[style, Styles.container]} onPress={onPress}>
      <Text style={Styles.content}>{title}</Text>
    </TouchableOpacity>
  )
}