import {observable} from 'mobx'

class GeneralStore {
  @observable _pickValue: [] = []

  get pickValue(): [] {
    return this._pickValue
  }

  set pickValue(pickValue: []) {
    this._pickValue = pickValue
  }
}

export const generalStore = new GeneralStore()
