import React from 'react'
import {Text} from 'react-native'
import {Styles} from './Styles/FRTitleStyles'

export interface Props {
  content: string
}

export const FRTitle = ({content}: Props) => {
  return <Text style={Styles.title}>{content}</Text>
}
