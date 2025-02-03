import {isNotNull} from 'src/base';

describe('isNull', () => {
    it('should return false for null value', () => {
        expect(isNotNull(null)).toBe(false);
    })
})