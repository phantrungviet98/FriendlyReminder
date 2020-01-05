import {SafeAreaView, StatusBar, ScrollView, StyleSheet} from 'react-native'
import * as React from 'react'
import {ApplicationStyles} from '../../Assets'
import {FRTitle} from '../../Components'
import {DescriptionTermsConditionsText, SignUpForm} from './Components'

const SignUpScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView/>
      <StatusBar backgroundColor='white' barStyle={'dark-content'}/>
      <FRTitle content={'Sign Up'}/>
      <SignUpForm/>
      <DescriptionTermsConditionsText/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ...ApplicationStyles,
})

export default SignUpScreen
