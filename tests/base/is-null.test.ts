import {isNull} from 'src/base';

describe('isNull', () => {
    it('should return true for null value', () => {
        expect(isNull(null)).toBe(true);
    })
})