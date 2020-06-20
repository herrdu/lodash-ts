import {isSymbol} from '../isSymbol';

/** Used as references for various `Number` constants. */
const NAN = 0 / 0;

export function baseToNumber(value: any) {
  if (typeof value === 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  return +value;
}
