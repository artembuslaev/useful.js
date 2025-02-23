import { isNotNumber } from 'numbers';

describe('isNotNumber', () => {
  it('should return false for number value', () => {
    expect(isNotNumber(1)).toBe(false);
  });

  it('should return true for string value', () => {
    expect(isNotNumber('1')).toBe(true);
  });
});
