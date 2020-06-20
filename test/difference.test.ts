import {difference} from '../src/difference';
import {add} from '../src/add';

test('add', () => {
  expect(add(1, 2)).toEqual(3);
});

test('difference', () => {
  expect(difference([1, 2, 3, 4, 5], [5, 2, 10])).toEqual([1, 3, 4]);
});
