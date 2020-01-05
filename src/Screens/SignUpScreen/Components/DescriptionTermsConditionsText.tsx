import * as React from 'react'
import {Text, StyleSheet} from 'react-native'
import {Colors, Normalize} from '../../../Assets'

export const DescriptionTermsConditionsText = () => {
  return (
    <Text style={styles.text}>
      By signing up agreeing to
      <Text style={styles.pressText}> terms </Text>
      and<Text style={styles.pressText}> conditions</Text>
    </Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: Normalize(12),
    alignSelf: 'center'
  },
  pressText: {
    color: Colors.purple_4856FF,
    textDecorationLine: 'underline',
  }
})
