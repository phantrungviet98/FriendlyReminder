import * as React from 'react'
import {View, StyleSheet} from 'react-native'
import {FRButton, FRText, FRTextInput, FRTitle} from '../../Components'
import {ApplicationStyles, Normalize} from '../../Assets'
import {AuthStore} from '../../Store/Auth'
import {useState} from 'react'
import {useNavigation} from 'react-navigation-hooks'

const ForgotPasswordScreen = () => {
  const {goBack} = useNavigation()
  const [email, setEmail] = useState('')

  const onPress = () => {
    if(!email.trim()) {
      alert('Please enter email')
      return
    }

    AuthStore.forgotPassword(email)
      .then(() => {
        goBack()
        alert('We have sent a reset email to ' + email)
      })
      .catch(err => {
        alert(err.message)
      })
  }

  return (
    <View style={styles.container}>
      <FRTitle content={'Password Reset'} />
      <View style={styles.wrapContent}>
        <FRText style={styles.text}>
          Please type in your email below. We will send you the password reset link
        </FRText>
        <FRTextInput placeholder={'Your email'} onChangeText={(text) => setEmail(text)} />
        <FRButton title={'Get password reset link'} onPress={onPress} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  ...ApplicationStyles,
  wrapContent: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    marginBottom: Normalize(20),
  },
})

export default ForgotPasswordScreen
