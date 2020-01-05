import {LoginManager, AccessToken} from 'react-native-fbsdk'
import firebaseApp, {ReactNativeFirebase} from '@react-native-firebase/app'
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth'
import {GoogleSignin} from '@react-native-community/google-signin'
import {Platform} from 'react-native'

const androidConfig: ReactNativeFirebase.FirebaseAppOptions = {
  appId: '1:828623524609:android:656f467823a5d774498100',
  projectId: 'friendlyreminder-c04d7',
  apiKey: 'AIzaSyC8TMeLn5qG4XWlqfChrteCqE2r5tN9rWE',
  databaseURL: 'https://friendlyreminder-c04d7.firebaseio.com',
  messagingSenderId: '828623524609',
  storageBucket: '',
  clientId: '828623524609-r54q5ote1ih7ac5qbg9n18c065jh5r1i.apps.googleusercontent.com',
}

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
    if (!firebaseApp.apps.length) {
      firebaseApp.initializeApp(Platform.OS === 'ios' ? iosConfig : androidConfig)
    }
  }

  signIn = (email: string, password: string) => {
    return auth().signInWithEmailAndPassword(email.trim(), password.trim())
  }

  signUp = (email: string, password: string) => {
    return auth().createUserWithEmailAndPassword(email.trim(), password.trim())
  }

  forgotPassword = (email: string) => {
    return auth().sendPasswordResetEmail(email.trim())
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
    const credential = auth.FacebookAuthProvider.credential(data.accessToken)

    return await auth().signInWithCredential(credential)
  }

  loginWithGoogle = async (): Promise<FirebaseAuthTypes.UserCredential> => {
    await GoogleSignin.configure({
      iosClientId: '828623524609-gppmr47iqmpg7nkfdepqlgjb0hr5r8f2.apps.googleusercontent.com',
    })

    const {idToken} = await GoogleSignin.signIn()
    const {accessToken} = await GoogleSignin.getTokens()
    const credential = auth.GoogleAuthProvider.credential(idToken, accessToken)

    return await auth().signInWithCredential(credential)
  }
}

export const AuthStore = new Auth()
