import {assocIndexOf} from './assocIndexOf';

export class ListCache {
  __data__: any[];
  size: number;

  /**
   * Creates an list cache object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  constructor(entries?: string | any[]) {
    let index = -1;
    const length = entries === null || entries === undefined ? 0 : entries.length;

    this.__data__ = [];
    this.size = 0;

    while (++index < length) {
      const entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  /**
   * Removes all key-value entries from the list cache.
   *
   * @memberOf ListCache
   */
  clear() {
    this.__data__ = [];
    this.size = 0;
  }

  /**
   * Removes `key` and its value from the list cache.
   *
   * @memberOf ListCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  delete(key: string): boolean {
    const data = this.__data__;
    const index = assocIndexOf(data, key);

    if (index < 0) {
      return false;
    }
    const lastIndex = data.length - 1;
    if (index === lastIndex) {
      data.pop();
    } else {
      data.splice(index, 1);
    }
    --this.size;
    return true;
  }

  /**
   * Gets the list cache value for `key`.
   *
   * @memberOf ListCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  get(key: string): any {
    const data = this.__data__;
    const index = assocIndexOf(data, key);
    return index < 0 ? undefined : data[index][1];
  }

  /**
   * Checks if a list cache value for `key` exists.
   *
   * @memberOf ListCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  has(key: string): boolean {
    return assocIndexOf(this.__data__, key) > -1;
  }

  /**
   * Sets the list cache `key` to `value`.
   *
   * @memberOf ListCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the list cache instance.
   */
  set(key: string, value: any): object {
    const data = this.__data__;
    const index = assocIndexOf(data, key);

    if (index < 0) {
      ++this.size;
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }
    return this;
  }
}
