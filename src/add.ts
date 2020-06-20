import {createMathOperation} from './.internal/createMathOperation';

/**
 * Adds two numbers.
 *
 * @since 3.4.0
 * @category Math
 * @param {number} augend The first number in an addition.
 * @param {number} addend The second number in an addition.
 * @returns {number} Returns the total.
 * @example
 *
 * add(6, 4)
 * // => 10
 */
export const add = createMathOperation((augend: any, addend: any) => augend + addend, 0);
