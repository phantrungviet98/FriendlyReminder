import React from 'react'
import {Text} from 'react-native'
import {Styles} from './Styles/FRDescriptionTitleStyles'

export interface Props {
  content: string
}

export const FRDescriptionTitle = ({content}: Props) => {
  return <Text style={Styles.description}>{content}</Text>
}
