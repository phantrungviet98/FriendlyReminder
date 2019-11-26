import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import WelcomeScreen from '../Screens/LoginScreen/WelcomeScreen'
import EnterEmailScreen from '../Screens/LoginScreen/EnterEmailScreen'

const PrivateNavigator = createStackNavigator({
    Welcome:  {screen: WelcomeScreen},
    EnterEmail: {screen: EnterEmailScreen}
},{
  initialRouteName: 'Welcome',
  headerMode: 'none'
})

const AppNavigator = createStackNavigator({
    PrivateNavigator: PrivateNavigator
}, {
  headerMode: 'none'
})

const AppContainer = createAppContainer(AppNavigator)
export default AppContainer