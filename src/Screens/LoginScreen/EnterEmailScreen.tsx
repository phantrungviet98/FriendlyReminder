import * as React from 'react'
import {SafeAreaView, View} from 'react-native'
import {Styles} from './Styles/EnterEmailScreenStyles'
import {FRTitle, FRDescriptionTitle, FRTextInput, FRButton, FRNavigationBar} from '../../Components'

const EnterEmailScreen = () => {
  return (
    <View style={Styles.container}>
      <SafeAreaView />
      <FRNavigationBar />
      <View style={Styles.wrapContent}>
        <FRTitle content={'Enter your email...'} />
        <FRDescriptionTitle content={'Kindly provide your email address.'} />
        <View style={Styles.wrapTextInput}>
          <FRTextInput placeholder={'Email Address'} />
        </View>
        <View style={Styles.wrapButton}>
          <FRButton
            title={'Next >>'}
            style={Styles.button}
          />
        </View>
      </View>
    </View>
  )
}

export default EnterEmailScreen
