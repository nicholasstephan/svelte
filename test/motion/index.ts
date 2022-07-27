import * as assert from 'assert';
import { get } from '../../store';
import { spring, tweened } from '../../motion';

describe('motion', () => {
	describe('spring', () => {
		it('handles initially undefined values', () => {
			const size = spring();

			size.set(100);
			assert.equal(get(size), 100);
		});

		xit('ignores undefined target object properties', async () => {
			const size = spring({a:0, b:0}, { stiffness: 0.5, damping: 0.5 });

			// @ts-ignore
			await size.set({a:10}, {soft:true});
			assert.equal(get(size), {a:10});
		});

		xit('sets new object properties immediately', async () => {
			const size = spring({}, { stiffness: 0.5, damping: 0.5 });

			// @ts-ignore
			await size.set({a:10}, {soft:true});
			assert.equal(get(size), {a:10});
		});
	});

	describe('tweened', () => {
		it('handles initially undefined values', () => {
			const size = tweened();

			size.set(100);
			assert.equal(get(size), 100);
		});

		it('sets immediately when duration is 0', () => {
			const size = tweened(0);

			size.set(100, { duration : 0 });
			assert.equal(get(size), 100);
		});
	});
});
