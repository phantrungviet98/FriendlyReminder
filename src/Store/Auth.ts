import {LoginManager, AccessToken} from 'react-native-fbsdk'
import firebaseApp, {ReactNativeFirebase} from '@react-native-firebase/app'
import {firebase, FirebaseAuthTypes} from '@react-native-firebase/auth'
import {GoogleSignin} from '@react-native-community/google-signin'

/**
 * Todo: android Config
 */
const iosConfig: ReactNativeFirebase.FirebaseAppOptions = {
  appId: '1:828623524609:ios:5b02c704a9e57534498100',
  projectId: 'friendlyreminder-c04d7',
  apiKey: 'AIzaSyBqtrSe1tdNxFFXnlB5AxOenZfmzkYmIlw',
  databaseURL: 'https://friendlyreminder-c04d7.firebaseio.com',
  messagingSenderId: '828623524609',
  storageBucket: '',
  clientId: '828623524609-gppmr47iqmpg7nkfdepqlgjb0hr5r8f2.apps.googleusercontent.com',
}

class Auth {

  constructor() {
    if (!firebase.apps.length)
    firebaseApp.initializeApp(iosConfig)
  }

  loginWithFacebook = async (): Promise<FirebaseAuthTypes.UserCredential> => {
    const result = await LoginManager.logInWithPermissions(['public_profile', 'email'])

    if (result.isCancelled) {
      throw new Error('User cancelled the login process')
    }

    const data = await AccessToken.getCurrentAccessToken()

    if (!data) {
      throw new Error('Something went wrong obtaining access token')
    }
    const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken)

    return await firebase.auth().signInWithCredential(credential)
  }

  loginWithGoogle = async (): Promise<FirebaseAuthTypes.UserCredential> => {
    await GoogleSignin.configure( {
      iosClientId: '828623524609-gppmr47iqmpg7nkfdepqlgjb0hr5r8f2.apps.googleusercontent.com'
    })



    const {idToken} = await GoogleSignin.signIn()
    const {accessToken} = await GoogleSignin.getTokens()
    const credential = firebase.auth.GoogleAuthProvider.credential(idToken, accessToken)

    return await firebase.auth().signInWithCredential(credential)
  }
}

export const AuthStore = new Auth()
