import React from 'react'
import {Text} from 'react-native'
import {Styles} from './Styles/FRTitleStyles'

export const FRTitle = ({content}) => {
  return (
    <Text style={Styles.title}>{content}</Text>
  )
}