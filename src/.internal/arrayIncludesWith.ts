/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */

export function arrayIncludesWith(
  array: Array<any> | null,
  target: any,
  comparetor: (target: any, value: any) => boolean
): boolean {
  if (array === null) {
    return false;
  }
  for (const value of array) {
    if (comparetor(target, value)) {
      return true;
    }
  }
  return false;
}
