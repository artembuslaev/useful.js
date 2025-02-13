import { isNumber } from 'numbers';

describe('isNumber', () => {
  it('should return false for empty string', () => {
    expect(isNumber('')).toBe(false);
  });

  it('should return false for number in string', () => {
    expect(isNumber('12')).toBe(false);
  });

  it('should return false for string', () => {
    expect(isNumber('test')).toBe(false);
  });

  it('should return true for number value', () => {
    expect(isNumber(12)).toBe(true);
  });

  it('should return true for negative number value', () => {
    expect(isNumber(-12)).toBe(true);
  });

  it('should return true for double value', () => {
    expect(isNumber(234.12)).toBe(true);
  });

  it('should return true for negative double value', () => {
    expect(isNumber(-23.412)).toBe(true);
  });

  it('should return true for zero', () => {
    expect(isNumber(0)).toBe(true);
  });

  it('should return false for infinity obtained by division', () => {
    expect(isNumber(1 / 0)).toBe(false);
  });

  it('should return false for not a number', () => {
    expect(isNumber(NaN)).toBe(false);
  });

  it('should return false for infinity', () => {
    expect(isNumber(Infinity)).toBe(false);
  });

  it('should return false for negative infinity', () => {
    expect(isNumber(-Infinity)).toBe(false);
  });

  it('should return false for array of numbers', () => {
    expect(isNumber([0])).toBe(false);
  });

  it('should return true for number max value', () => {
    expect(isNumber(Number.MAX_VALUE)).toBe(true);
  });

  it('should return true for number min value', () => {
    expect(isNumber(Number.MIN_VALUE)).toBe(true);
  });

  it('should return true for max safe integer const', () => {
    expect(isNumber(Number.MAX_SAFE_INTEGER)).toBe(true);
  });

  it('should return false for null', () => {
    expect(isNumber(null)).toBe(false);
  });

  it('should return false for undefined', () => {
    expect(isNumber(undefined)).toBe(false);
  });

  it('should return false for object', () => {
    expect(isNumber({ value: 0 })).toBe(false);
  });
});
