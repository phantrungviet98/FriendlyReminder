import React from 'react'
import {View, Text, TouchableOpacity, StatusBar, SafeAreaView} from 'react-native'
import {Styles} from './Styles/WelcomeScreenStyles'
import {useNavigation} from 'react-navigation-hooks'
import {FRTitle, FRButton, FRDescriptionTitle} from '../../Components'

export interface Props {

}

const WelcomeScreen: React.FC<Props> = (props) => {
  const {navigate} = useNavigation()

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
          onPress={() => alert('Coming soon')}
          title={'Continue with Facebook'}
        />
        <FRButton
          style={Styles.button3}
          onPress={() => alert('Coming soon')}
          title={'Continue with Google'}
        />
      </View>
      <Text style={Styles.skip} onPress={() => navigate('EnterEmail')}>
        Skip >>
      </Text>
    </View>
  )
}

export default WelcomeScreen
