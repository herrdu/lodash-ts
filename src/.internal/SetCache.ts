import {MapCache} from './MapCache';

import {HASH_UNDEFINED} from './Hash';

export class SetCache {
  __data__: MapCache;

  /**
   * Creates an array cache object to store unique values.
   *
   * @private
   * @constructor
   * @param {Array} [values] The values to cache.
   */
  constructor(values?: Array<any>) {
    let index = -1;
    const length = values === null || values === undefined ? 0 : values.length;

    this.__data__ = new MapCache();

    while (++index < length) {
      this.add(values);
    }
  }

  /**
   * Adds `value` to the array cache.
   *
   * @memberOf SetCache
   * @alias push
   * @param {*} value The value to cache.
   * @returns {Object} Returns the cache instance.
   */
  add(value: any): object {
    this.__data__.set(value, HASH_UNDEFINED);
    return this;
  }

  /**
   * Checks if `value` is in the array cache.
   *
   * @memberOf SetCache
   * @param {*} value The value to search for.
   * @returns {boolean} Returns `true` if `value` is found, else `false`.
   */
  has(value: any): boolean {
    return this.__data__.has(value);
  }
}

export interface SetCache {
  push: typeof SetCache.prototype.add;
}

SetCache.prototype.push = SetCache.prototype.add;
