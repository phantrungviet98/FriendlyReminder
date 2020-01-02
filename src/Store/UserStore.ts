import {observable} from 'mobx'
import {FirebaseAuthTypes} from '@react-native-firebase/auth'

class UserStore {
  @observable _user: FirebaseAuthTypes.User = <FirebaseAuthTypes.User>{}

  get user(): FirebaseAuthTypes.User {
    return this._user
  }

  set user(user: FirebaseAuthTypes.User) {
    console.log('user', user)
    this._user = user
  }
}

export const userStore = new UserStore()
