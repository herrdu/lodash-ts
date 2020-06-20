import {SetCache} from './SetCache';

import {arrayIncludes} from './arrayIncludes';
import {arrayIncludesWith} from './arrayIncludesWith';
import {cacheHas} from './cacheHas';

const LARGE_ARRAY_SIZE = 200;

export function baseDifference(
  array: any[],
  values: any[],
  iteratee?: (value: any) => any,
  comparator?: any
) {
  console.log('baseDifference');

  let includes: any = arrayIncludes;

  let isCommon = true;

  const result: any[] = [];

  const valuesLength = values.length;

  let __values__: any[] | SetCache = values;

  if (!array.length) {
    return result;
  }

  if (iteratee) {
    __values__ = values.map(value => iteratee(value));
  }

  if (comparator) {
    includes = arrayIncludesWith;
    isCommon = false;
  } else if (__values__.length >= LARGE_ARRAY_SIZE) {
    includes = cacheHas;
    isCommon = false;
    __values__ = new SetCache(values);
  }

  outer: for (let value of array) {
    const computed = iteratee == null ? value : iteratee(value);

    value = comparator || value !== 0 ? value : 0;
    if (isCommon && computed === computed) {
      let valuesIndex = valuesLength;
      while (valuesIndex--) {
        if ((__values__ as any[])[valuesIndex] === computed) {
          continue outer;
        }
      }
      result.push(value);
    } else if (!includes(__values__, computed, comparator)) {
      result.push(value);
    }
  }

  return result;
}
