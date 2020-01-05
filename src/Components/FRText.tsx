import * as React from 'react'
import {Text, StyleSheet} from 'react-native'
import {Colors} from '../Assets'

interface Props {
  style?: any,
}

export const FRText: React.FC<Props> = ({children, style}) => {
  return <Text style={[styles.text, style]}>{children}</Text>
}

const styles = StyleSheet.create({
  text: {
    color: Colors.gray_7E7E7F
  }
})
