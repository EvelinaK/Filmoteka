export default class LocalStorageApi {
  constructor() {}

  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  remove(key) {
    localStorage.removeItem(key);
  }

  has(key) {
    return this.get(key) !== null;
  }

  get(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  clear() {
    localStorage.clear();
  }

  hasValueToData(key, value) {
    if (!this.has(key)) {
      return false;
    }
    const data = this.get(key);
    return data.includes(value);
  }
  addToData(key, value) {
    if (this.has(key)) {
      if (this.hasValueToData(key, value)) {
        return;
      }

      const data = this.get(key);
      const newData = [...data, value];
      this.set(key, newData);
    } else {
      this.set(key, [value]);
    }
  }
  removeToData(key, value) {
    if (this.hasValueToData(key, value)) {
      const data = this.get(key);
      data.splice(data.indexOf(value), 1);
      this.set(key, data);
    }
  }
}
