/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
export function setToArray(set: Set<any>): Array<any> {
  let index = -1;
  const result = new Array(set.size);

  set.forEach(value => {
    result[++index] = value;
  });
  return result;
}
