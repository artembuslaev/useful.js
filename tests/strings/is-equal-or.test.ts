import { isEqualOr } from "strings/is-equal-or";

describe('isEqualOr', () => {
  it('should return true for any matching value', () => {
      expect(isEqualOr('test', 'test1', 'test3', 'Test', 'test')).toBe(true);
  });

  it('should return true for every matching value', () => {
    expect(isEqualOr('test', 'test', 'test', 'test', 'test')).toBe(true);
  });

  it('should return false for no matching values', () => {
    expect(isEqualOr('test', 'test1', 'test3', 'Test', 'test12')).toBe(false);
  });

  it('should throw type error with number in arguments', () => {
    const test: any = 4;
    expect(() => isEqualOr('test', 'test1', 'test3', test, 'test1')).toThrow('Invalid argument type');
  });
});
