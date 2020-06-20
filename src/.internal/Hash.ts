/** Used to stand-in for `undefined` hash values. */
export const HASH_UNDEFINED = '__hash_undefined__';

export class Hash {
  __data__: any;

  size: number;

  /**
   * Creates a hash object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  constructor(entries?: any[]) {
    let index = -1;

    const length = entries === null || entries === undefined ? 0 : entries.length;

    this.size = 0
    this.__data__ = Object.create(null);

    while (++index < length) {
      const entry = (entries as any[])[index];
      this.set(entry[0], entry[1]);
    }
  }

  /**
   * Removes all key-value entries from the hash.
   *
   * @memberOf Hash
   */
  clear() {
    this.__data__ = Object.create(null);
    this.size = 0;
  }

  /**
   * Removes `key` and its value from the hash.
   *
   * @memberOf Hash
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  delete(key: string): boolean {
    const result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
  }

  /**
   * Gets the hash value for `key`.
   *
   * @memberOf Hash
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  get(key: string | number): any {
    const data = this.__data__;
    const result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }

  /**
   * Checks if a hash value for `key` exists.
   *
   * @memberOf Hash
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  has(key: string): boolean {
    const data = this.__data__;
    return data[key] !== undefined;
  }

  /**
   * Sets the hash `key` to `value`.
   *
   * @memberOf Hash
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the hash instance.
   */
  set(key: string, value: any): Hash {
    const data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = value === undefined ? HASH_UNDEFINED : value;
    return this;
  }
}
