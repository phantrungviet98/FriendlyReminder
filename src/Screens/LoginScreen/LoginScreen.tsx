import * as React from 'react'
import {StatusBar, SafeAreaView, ScrollView} from 'react-native'
import {Styles} from './Styles/WelcomeScreenStyles'
import {FRTitle} from '../../Components'
import {observer} from 'mobx-react'
import {SignInForm} from './Components'

export interface Props {
}

const LogInScreen: React.FC<Props> = observer(() => {

  return (
    <ScrollView style={Styles.container}>
      <SafeAreaView />
      <StatusBar backgroundColor='white' barStyle={'dark-content'}/>
      <FRTitle content={'Sign In'} />
      <SignInForm/>
    </ScrollView>
  )
})

export default LogInScreen
