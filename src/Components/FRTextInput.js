import React from 'react'
import {TextInput} from 'react-native'
import {Styles} from './Styles/FRTextInputStyles'

export const FRTextInput = ({placeholder, onChangeText}) => {
  return (
    <TextInput style={Styles.input} placeholder={placeholder}
      onChangeText={onChangeText} placeholderTextColor={'black'} />
  )
} 