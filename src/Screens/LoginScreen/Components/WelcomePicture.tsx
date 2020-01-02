import React from 'react'
import {Image, View, StyleSheet} from 'react-native'
import {Images} from '../../../Assets'
import {ThreeDots} from './ThreeDots'

export const WelcomePicture = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={Images.welcomeLogo}/>
      <ThreeDots/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: '50%',
    justifyContent: 'space-between',
  },
  image: {
    width: '60%',
    resizeMode: 'contain'
  }
})

