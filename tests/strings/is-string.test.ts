import { isString } from 'strings';

describe('isString', () => {
  it('should return true for empty value', () => {
    expect(isString('')).toBe(true);
  });

  it('should return true for string value', () => {
    expect(isString('test')).toBe(true);
  });

  it('should return false for number value', () => {
    expect(isString(12)).toBe(false);
  });

  it('should return false for array value', () => {
    expect(isString(['', 'test'])).toBe(false);
  });

  it('should return false for object value', () => {
    expect(isString({ name: 'test' })).toBe(false);
  });
});
