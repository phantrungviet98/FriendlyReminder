import {action, observable} from 'mobx'
import {User} from '../Interfaces/User'
import {realtimeDB} from './RealtimeDB'
import {baseStore} from './Base'
import {storageKey} from '../Common/constants/StorageKey'

class UserStore {
  @observable user = <User | null>{}

  @action
  setUser = (user: User) => {
    this.user = user
    baseStore.setStorage(storageKey.USER, user).then()
    return realtimeDB.updateUser(user)
  }

  @action
  getUserFromDB = (uid: string) => {
    realtimeDB.getUser(uid)
      .then(user => {
        this.user = user
        baseStore.setStorage(storageKey.USER, user).then()
      })
  }

}

export const userStore = new UserStore()
