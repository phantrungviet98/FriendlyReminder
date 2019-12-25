import React from 'react'
import {TextInput} from 'react-native'
import {Styles} from './Styles/FRTextInputStyles'

export interface Props {
  placeholder: string,
  onChangeText?: (text: string) => any
}

export const FRTextInput = ({placeholder, onChangeText}: Props) => {
  return (
    <TextInput
      style={Styles.input}
      placeholder={placeholder}
      onChangeText={onChangeText}
      placeholderTextColor={'black'}
    />
  )
}
