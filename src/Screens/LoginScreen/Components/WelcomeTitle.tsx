import React from 'react'
import normalize from 'react-native-normalize'
import {Text, View, StyleSheet} from 'react-native'
import {Colors, Fonts} from '../../../Assets'

export const WelcomeTitle = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Friendly Reminder</Text>
      <Text style={styles.subTitle}>Track your health & be healthy</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '30%',
    alignItems: 'center',
  },
  title: {
    fontSize: Fonts.title,
    color: Colors.purple_4856FF,
    marginBottom: normalize(8),
  },
  subTitle: {
    color: Colors.gray_7E7E7F,
    fontSize: Fonts.subTitle
  }
})
