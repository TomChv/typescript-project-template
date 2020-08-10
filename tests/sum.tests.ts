import { describe, it, expect } from '@jest/globals';
import sum from '../src/sum';

/**
 * @description Test sum function
 *
 * Compute some number to verify if sum is working well
 * I know it's overkill :) It's just a placeholder haha
 */
describe('Test sum function', () => {
	it('Simply 1 + 1', () => {
		expect(sum(1, 1)).toBe(2);
	});

	it('The answers of the Universe !', () => {
		const result: number = sum(21, 21);
		expect(result).toBe(42);
	});
});
