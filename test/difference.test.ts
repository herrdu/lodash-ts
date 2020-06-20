import { difference } from "../src/difference"

test('difference', () => {
	expect(difference([1, 2, 3, 4, 5], [5, 2, 10])).toEqual([1, 3, 4])
})