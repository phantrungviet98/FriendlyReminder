import React from 'react'
import {View, StyleSheet} from 'react-native'
import normalize from 'react-native-normalize'
import {Colors} from '../../../Assets'

export const ThreeDots = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.dot, {backgroundColor: Colors.gray_888888}]}/>
      <View style={[styles.dot, {backgroundColor: Colors.gray_CCCFD0}]}/>
      <View style={[styles.dot, {backgroundColor: Colors.gray_CCCFD0}]}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dot: {
    height: normalize(6),
    width: normalize(6),
    borderRadius: normalize(3),
  },
})
