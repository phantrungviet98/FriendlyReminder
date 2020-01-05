import {User} from '../Interfaces/User'
import database from '@react-native-firebase/database'

class RealtimeDB {
  constructor() {}

  updateUser = async (user: User) => {
    const {uid, email, displayName, gender} = user
    const ref = database().ref(`/users/${uid}`)

    await ref.set({
      uid,
      displayName,
      email,
      gender,
    })
  }

  getUser = async (uid: string) => {
    const ref = database().ref(`/users/${uid}`)
    const snapshot = await ref.once('value')

    return snapshot.val()
  }
}

export const realtimeDB = new RealtimeDB()
