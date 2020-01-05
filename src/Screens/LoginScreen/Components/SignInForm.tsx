import * as React from 'react'
import {View, StyleSheet} from 'react-native'
import {FRButton, FRTextInput, FRTextPressable} from '../../../Components'
import {SignInViaText} from '../Components'
import {useNavigation} from 'react-navigation-hooks'
import {AuthStore} from '../../../Store/Auth'
import {userStore} from '../../../Store/UserStore'
import {Normalize} from '../../../Assets'
import {useState} from 'react'

export const SignInForm = () => {
  const {navigate} = useNavigation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const syncUser = (uid: string) => {
    userStore.getUserFromDB(uid)
    navigate('MainTabBar')
  }

  const loginWithFacebook = () => {
    AuthStore.loginWithFacebook()
      .then(res => {
        syncUser(res.user.uid)
      })
      .catch(err => {
        alert(err.message)
      })
  }

  const loginWithGoogle = () => {
    AuthStore.loginWithGoogle()
      .then(res => {
        syncUser(res.user.uid)
      })
      .catch(err => {
        alert(err.message)
      })
  }

  const handleLogin = () => {
    AuthStore.signIn(email, password)
      .then(res => {
        syncUser(res.user.uid)
      })
      .catch(err => {
        alert(err.message)
      })
  }

  const forgotPassword = () => {
    navigate('ForgotPassword')
  }

  return (
    <View style={styles.container}>
      <FRTextInput placeholder={'Email'}
                   onChangeText={text => setEmail(text)} />
      <FRTextInput placeholder={'Password'}
                   onChangeText={text => setPassword(text)}
                   secured />
      <FRTextPressable
        text={'Forgot Password?'}
        onPress={forgotPassword}
        style={styles.textPressable}
      />
      <FRButton title={'Sign In'} style={styles.button} onPress={handleLogin}/>
      <SignInViaText style={styles.signInVia} pressText={'Facebook'} onPress={loginWithFacebook} />
      <SignInViaText pressText={'Google'} onPress={loginWithGoogle} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '95%',
    paddingVertical: Normalize(100),
  },
  button: {
    marginHorizontal: Normalize(12),
    marginBottom: Normalize(12),
  },
  textPressable: {
    marginBottom: Normalize(20),
  },
  signInVia: {
    marginVertical: Normalize(10)
  }
})
