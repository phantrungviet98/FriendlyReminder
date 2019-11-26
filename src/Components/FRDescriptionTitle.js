import React from 'react'
import {Text} from 'react-native'
import {Styles} from './Styles/FRDescriptionTitleStyles'

export const FRDescriptionTitle = ({content}) => {
  return (
    <Text style={Styles.description}>{content}</Text>
  )
} 