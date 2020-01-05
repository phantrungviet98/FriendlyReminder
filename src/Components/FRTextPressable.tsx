import * as React from 'react'
import {StyleSheet, Text} from 'react-native'
import {Colors, Normalize} from '../Assets'

interface Props {
  style?: any,
  text: string
  onPress: () => void
}

export const FRTextPressable: React.FC<Props> = ({style, text, onPress}) => {
  return (
    <Text style={[styles.text, style]} onPress={onPress}>
      {text}
    </Text>
  )
}

const styles = StyleSheet.create({
  text: {
    color: Colors.gray_888888,
    textDecorationLine: 'underline',
    fontSize: Normalize(10),
  },
})
