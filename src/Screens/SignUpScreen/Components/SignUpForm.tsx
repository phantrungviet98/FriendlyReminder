import * as React from 'react'
import {View, StyleSheet} from 'react-native'
import {FRButton, FRHaveAccountText, FRTextInput} from '../../../Components'
import {Normalize} from '../../../Assets'
import {SignUpViaText} from './'
import {AuthStore} from '../../../Store/Auth'
import {userStore} from '../../../Store/UserStore'
import {useNavigation} from 'react-navigation-hooks'
import {useState} from 'react'
import {FirebaseAuthTypes} from '@react-native-firebase/auth'

export const SignUpForm = () => {
  const {navigate} = useNavigation()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const storeUser = (user: FirebaseAuthTypes.User): void => {
    console.log('user', user)
    if (user) {
      userStore.setUser({
        uid: user.uid,
        displayName: firstName + ' ' + lastName,
        email: user.email ? user.email : '',
        gender: undefined,
      }).then()
      navigate('MainTabBar')
    }
  }

  const handleSignUp = () => {
    if (!firstName.trim() || !lastName.trim() || !email.trim() || !password.trim()) {
      alert('Please fill all fields')
    } else {
      AuthStore.signUp(email, password)
        .then((res) => {
          res.user.email && storeUser(res.user)
        })
        .catch((error) => {
          alert(error.message)
        })
    }
  }

  const loginWithFacebook = () => {
    AuthStore.loginWithFacebook()
      .then((res) => {
        storeUser(res.user)
      })
      .catch((err) => console.log(err.message))
  }

  const loginWithGoogle = () => {
    AuthStore.loginWithGoogle()
      .then((res) => {
        storeUser(res.user)
      })
      .catch((err) => console.log(err.message))
  }

  return (
    <View style={styles.container}>
      <FRTextInput placeholder={'First Name'} onChangeText={(text) => setFirstName(text)} />
      <FRTextInput placeholder={'Last Name'} onChangeText={(text) => setLastName(text)} />
      <FRTextInput placeholder={'Email'} onChangeText={(text) => setEmail(text)} />
      <FRTextInput placeholder={'Password'} secured onChangeText={(text) => setPassword(text)} />
      <FRButton title={'Sign Up'} style={styles.button} onPress={handleSignUp} />
      <FRHaveAccountText />
      <SignUpViaText style={styles.signUpVia} pressText={'Facebook'} onPress={loginWithFacebook} />
      <SignUpViaText style={styles.signUpVia} pressText={'Google'} onPress={loginWithGoogle} />
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
  signUpVia: {
    marginTop: Normalize(20)
  }
})
