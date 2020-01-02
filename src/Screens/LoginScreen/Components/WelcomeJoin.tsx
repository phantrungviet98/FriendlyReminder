import React from 'react'
import {View, StyleSheet} from 'react-native'
import {FRButton} from '../../../Components'
import {HaveAccountText} from './HaveAccountText'
import {Normalize} from '../../../Assets'

export const WelcomeJoin = () => {
  return (
    <View style={styles.container}>
      <FRButton title={'Get Started'}/>
      <HaveAccountText/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: Normalize(10),
    height: '30%',
    justifyContent: 'space-evenly',
  }
})
