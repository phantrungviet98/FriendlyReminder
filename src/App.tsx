/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useEffect} from 'react'
import SplashScreen from 'react-native-splash-screen'
import AppContainer from './Navigations/AppNavigation'

const App = () => {

  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return <AppContainer />
}

export default App
