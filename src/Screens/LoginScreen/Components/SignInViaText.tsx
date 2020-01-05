import * as React from 'react'
import {StyleSheet, Text} from 'react-native'
import {Colors} from '../../../Assets'

interface Props {
  style?: any,
  pressText: string,
  onPress: () => void,
}

export const SignInViaText: React.FC<Props> = ({onPress, pressText, style}) => {
  return (
    <Text style={[styles.text, style]}>
      Sign in via <Text style={styles.pressText} onPress={onPress}>{pressText}</Text>
    </Text>
  )
}

const styles = StyleSheet.create({
  text: {
    alignSelf: 'center',
    color: Colors.gray_888888,
  },
  pressText: {
    color: Colors.purple_4856FF,
    textDecorationLine: 'underline',
  }
})
