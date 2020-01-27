import AsyncStorage from '@react-native-community/async-storage'

class BaseStore {

  setStorage = async (key: string, value: any) => {
    return AsyncStorage.setItem(key, JSON.stringify(value))
  }

  getStorage = async (key: string) => {
    try {
      const data = await AsyncStorage.getItem(key)
      return data ? JSON.parse(data) : null
    } catch (e) {
      console.log(e)
    }
  }
}

export const baseStore = new BaseStore()
