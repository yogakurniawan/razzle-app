export default class DataStore {
  constructor(data) {
    this.data = data
  }

  get() {
    return this.data
  }
}