import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import {Colors} from '../Assets'
import {useNavigation} from 'react-navigation-hooks'

export const FRHaveAccountText = () => {
  const {navigate} = useNavigation()

  return (
    <View style={styles.container}>
      <Text style={styles.textQuestion}>Already have an account? </Text>
      <Text style={styles.textLogin}
            onPress={() => navigate('LogIn')}>
        Log In
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textQuestion: {
    color: Colors.gray_888888
  },
  textLogin: {
    color: Colors.purple_4856FF,
    textDecorationLine: 'underline'
  }
})
