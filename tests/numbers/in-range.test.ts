import { inRange } from 'numbers';

describe('inRange', () => {
  it('should return true for value in range', () => {
    expect(inRange(1, 0, 2)).toBe(true);
  });

  it('should return false for value out of range', () => {
    expect(inRange(3, 0, 2)).toBe(false);
  });

  it('should return false for value that equals max with strict mode', () => {
    expect(inRange(2, 0, 2, true)).toBe(false);
  });

  it('should return true for value that equals max with strict mode off', () => {
    expect(inRange(2, 0, 2, false)).toBe(true);
  });

  it('should return true for value that equals max without strict parameter', () => {
    expect(inRange(2, 0, 2)).toBe(true);
  });
});
