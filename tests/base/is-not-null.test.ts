import { isNotNull } from 'base';

describe('isNull', () => {
  it('should return false for null value', () => {
    expect(isNotNull(null)).toBe(false);
  });
});
