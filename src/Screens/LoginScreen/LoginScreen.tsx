import * as React from 'react'
import {View, Text, StatusBar, SafeAreaView} from 'react-native'
import {Styles} from './Styles/WelcomeScreenStyles'
import {useNavigation} from 'react-navigation-hooks'
import {FRTitle, FRButton, FRDescriptionTitle} from '../../Components'
import {AuthStore} from '../../Store/Auth'
import {userStore} from '../../Store/UserStore'
import {observer} from 'mobx-react'

export interface Props {
}

const LogInScreen: React.FC<Props> = observer(() => {
  const {navigate} = useNavigation()

  const loginWithFacebook = () => {
    AuthStore.loginWithFacebook().then(res => {
      if (res.user) {
        userStore.user = res.user
        alert('Sign In Success')
      } else {
        alert('failure')
      }
    })
  }

  const loginWithGoogle = () => {
    AuthStore.loginWithGoogle().then(res => {
      if (res.user) {
        alert('Sign In Success')
      } else {
        alert('Failre')
      }
    })
  }

  return (
    <View style={Styles.container}>
      <SafeAreaView />
      <StatusBar backgroundColor='white' barStyle={'dark-content'} />
      <FRTitle content={'Welcome'} />
      <FRDescriptionTitle content={'Login or Sign Up to get Started.'} />
      <View style={Styles.wrapBody}>
        <FRButton
          style={Styles.button1}
          onPress={() => alert('Coming soon')}
          title={'Continue with Email'}
        />
        <FRButton
          style={Styles.button2}
          onPress={loginWithFacebook}
          title={'Continue with Facebook'}
        />
        <FRButton
          style={Styles.button3}
          onPress={loginWithGoogle}
          title={'Continue with Google'}
        />
        <Text>{userStore.user.email}</Text>
      </View>
      <Text style={Styles.skip} onPress={() => navigate('EnterEmail')}>
        Skip >>
      </Text>
    </View>
  )
})

export default LogInScreen
