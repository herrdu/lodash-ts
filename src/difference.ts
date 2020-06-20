import {isArrayLikeObject} from './isArrayLikeObject';

import {baseDifference} from './.internal/baseDifference';
import {baseFlatten} from './.internal/baseFlatten';

export function difference(array: any[], ...values: Array<any[]>) {
  return isArrayLikeObject(array)
    ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
    : [];
}
