import {isNotEmpty} from 'src/strings';

describe('isNotEmpty', () => {
    it('should return false for empty value', () => {
        expect(isNotEmpty('')).toBe(false);
    })
})