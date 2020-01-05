import * as React from 'react'
import {StyleSheet, Text} from 'react-native'
import {Colors} from '../../../Assets'

interface Props {

}


export const NewToText: React.FC<Props> = () => {

  const onPress = () => {
  }

  return (
    <Text style={styles.text}>
      New to Friendly Reminder <Text style={styles.pressText} onPress={onPress}>Sign Up</Text>
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
