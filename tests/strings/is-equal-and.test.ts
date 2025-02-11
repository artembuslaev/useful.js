import { isEqualAnd } from "strings";

describe('isEqualAnd', () => {
  it('should return false for one matching value', () => {
      expect(isEqualAnd('test', 'test1', 'test3', 'Test', 'test')).toBe(false);
  });

  it('should return true for every matching value', () => {
    expect(isEqualAnd('test', 'test', 'test', 'test', 'test')).toBe(true);
  });

  it('should return false for no matching values', () => {
    expect(isEqualAnd('test', 'test1', 'test3', 'Test', 'test12')).toBe(false);
  });

  it('should throw type error with number in arguments', () => {
    const test: any = 4;
    expect(() => isEqualAnd('test', 'test1', 'test3', test, 'test1')).toThrow('Invalid argument type');
  });
});
