import {difference} from '../src/difference';
import {add} from '../src/add';
import {after} from '../src/after';

test('add', () => {
  expect(add(1, 2)).toEqual(3);
});

test('after', () => {
  var saves = ['profile', 'settings'];
  const done = after(saves.length, () => {
    console.log('done saving!');
  });
});

test('difference', () => {
  expect(difference([1, 2, 3, 4, 5], [5, 2, 10])).toEqual([1, 3, 4]);
});
