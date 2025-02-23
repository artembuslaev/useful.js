import { inRange } from 'numbers';

describe('inRange', () => {
  it('should return true for value without range', () => {
    expect(inRange(0, {})).toBe(true);
  });

  it('should return true for value in range', () => {
    expect(inRange(1, { start: 0, end: 2 })).toBe(true);
  });

  it('should return false for value out of range', () => {
    expect(inRange(3, { start: 0, end: 2 })).toBe(false);
  });

  it('should return false for value that equals max with includeBorders', () => {
    expect(inRange(2, { start: 0, end: 2 }, { includeBorders: true })).toBe(true);
  });

  it('should return true for value greater than start and without end', () => {
    expect(inRange(2, { start: 0 })).toBe(true);
  });

  it('should return false for value greater than end and without start', () => {
    expect(inRange(2, { end: 0 })).toBe(false);
  });
});
