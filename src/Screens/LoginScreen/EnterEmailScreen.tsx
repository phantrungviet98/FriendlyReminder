import React from 'react'
import {SafeAreaView, View} from 'react-native'
import {Styles} from './Styles/EnterEmailScreenStyles'
import {FRTitle, FRDescriptionTitle, FRTextInput, FRButton, FRNavigationBar} from '../../Components'
import {Colors} from '../../Assets'

const EnterEmailScreen = () => {
  return (
    <View style={Styles.container}>
      <SafeAreaView />
      <FRNavigationBar />
      <View style={Styles.wrapContent}>
        <FRTitle content={'Enter your email...'} />
        <FRDescriptionTitle content={'Kindly provide your email address.'} />
        <View style={{flex: 2, justifyContent: 'center'}}>
          <FRTextInput placeholder={'Email Address'} />
        </View>
        <View style={{flex: 3, alignItems: 'center'}}>
          <FRButton
            title={'Next >>'}
            style={{backgroundColor: Colors.green_42CA53, paddingHorizontal: 20, height: 50}}
          />
        </View>
      </View>
    </View>
  )
}

export default EnterEmailScreen
