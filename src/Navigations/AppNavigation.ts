import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import WelcomeScreen from '../Screens/LoginScreen/WelcomeScreen'
import EnterEmailScreen from '../Screens/LoginScreen/EnterEmailScreen'
import LogInScreen from '../Screens/LoginScreen/LoginScreen'

const PublicNavigator = createStackNavigator({
    Welcome:  {screen: WelcomeScreen},
    EnterEmail: {screen: EnterEmailScreen},
    LogIn: {screen: LogInScreen}
},{
  initialRouteName: 'Welcome',
  headerMode: 'none'
})

const AppNavigator = createStackNavigator({
    PrivateNavigator: PublicNavigator
}, {
  headerMode: 'none'
})

const AppContainer = createAppContainer(AppNavigator)
export default AppContainer
