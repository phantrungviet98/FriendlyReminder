import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import WelcomeScreen from '../Screens/LoginScreen/WelcomeScreen'
import LogInScreen from '../Screens/LoginScreen/LoginScreen'
import SignUpScreen from '../Screens/SignUpScreen/SignUpScreen'
import ForgotPasswordScreen from '../Screens/LoginScreen/ForgotPasswordScreen'
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen'
import MainTabBar from '../Screens/MainTabBar'

const PublicNavigator = createStackNavigator(
  {
    Welcome: {screen: WelcomeScreen},
    LogIn: {screen: LogInScreen},
    SignUp: {screen: SignUpScreen},
    ForgotPassword: {screen: ForgotPasswordScreen}
  },
  {
    initialRouteName: 'Welcome',
    headerMode: 'none',
  },
)

const PrivateNavigator = createStackNavigator(
  {
    MainTabBar: {screen: MainTabBar},
    Profile: {screen: ProfileScreen}
  },
  {
    initialRouteName: 'MainTabBar',
    headerMode: 'none'
  }
)

const AppNavigator = createStackNavigator(
  {
    PublicNavigator: PublicNavigator,
    PrivateNavigator: PrivateNavigator,
  },
  {
    headerMode: 'none',
  },
)

const AppContainer = createAppContainer(AppNavigator)
export default AppContainer
