import {SetCache} from './SetCache';
import {some} from '../some';
import {cacheHas} from './cacheHas';
import {Stack} from './Stack';

/** Used to compose bitmasks for value comparisons. */
const COMPARE_PARTIAL_FLAG = 1;
const COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
export function equalArrays(
  array: Array<any>,
  other: Array<any>,
  bitmask: number,
  customizer: Function,
  equalFunc: Function,
  stack: Stack
): boolean {
  const isPartial = bitmask & COMPARE_PARTIAL_FLAG;

  const arrLength = array.length;
  const othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }

  // Assume cyclic values are equal.
  const stacked = stack.get(array.toString());
  if (stacked && stack.get(other.toString())) {
    return stacked == other;
  }

  let index = -1;
  let result = true;

  const seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined;

  stack.set(array.toString(), other);
  stack.set(other.toString(), array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    let compared: any;
    const arrValue = array[index];
    const othValue = other[index];

    if (customizer) {
      compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (
        !some(other, (othValue: any, othIndex: string) => {
          if (
            !cacheHas(seen, othIndex) &&
            (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))
          ) {
            return seen.push(othIndex);
          }
        })
      ) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }
  stack['delete'](array.toString());
  stack['delete'](other.toString());
  return result;
}
