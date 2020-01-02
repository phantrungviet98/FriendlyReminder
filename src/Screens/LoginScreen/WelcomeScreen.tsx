import * as React from 'react'
import {View, StatusBar, SafeAreaView} from 'react-native'
import {Styles} from './Styles/WelcomeScreenStyles'
import {observer} from 'mobx-react'
import {WelcomeTitle, WelcomePicture, WelcomeJoin} from './Components'

export interface Props {
}

const WelcomeScreen: React.FC<Props> = observer(() => {

  return (
    <View style={Styles.container}>
      <SafeAreaView/>
      <StatusBar backgroundColor='white' barStyle={'dark-content'} />
      <WelcomeTitle/>
      <WelcomePicture/>
      <WelcomeJoin/>
    </View>
  )
})

export default WelcomeScreen
