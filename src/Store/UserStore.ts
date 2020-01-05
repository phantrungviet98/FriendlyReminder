import {action, observable} from 'mobx'
import {User} from '../Interfaces/User'
import {realtimeDB} from './RealtimeDB'

class UserStore {
  @observable user = <User | null>{}

  @action
  setUser = (user: User) => {
    console.log('user', user)
    this.user = user
    return realtimeDB.updateUser(user)
  }

  @action
  getUserFromDB = (uid: string) => {
    realtimeDB.getUser(uid)
      .then(user => {
        this.user = user
      })
  }

}

export const userStore = new UserStore()
