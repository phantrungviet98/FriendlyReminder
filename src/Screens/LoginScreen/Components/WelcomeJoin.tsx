import React from 'react'
import {View, StyleSheet} from 'react-native'
import {FRButton, FRHaveAccountText} from '../../../Components'
import {Normalize} from '../../../Assets'
import {useNavigation} from 'react-navigation-hooks'

export const WelcomeJoin = () => {
  const {navigate} = useNavigation()

  return (
    <View style={styles.container}>
      <FRButton title={'Get Started'}
                onPress={() => {
                  navigate('SignUp')
                }}/>
      <FRHaveAccountText/>
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
