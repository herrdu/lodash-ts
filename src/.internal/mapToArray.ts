/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */

import {MapCache} from './MapCache';

export function mapToArray(map: Map<any, any>): Array<any> {
  let index = -1;
  const result = new Array(map.size);

  map.forEach((value, key) => {
    result[++index] = [key, value];
  });
  return result;
}
