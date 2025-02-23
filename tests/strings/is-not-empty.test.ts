import { isNotEmpty } from 'strings';

describe('isNotEmpty', () => {
  it('should return false for empty value', () => {
    expect(isNotEmpty('')).toBe(false);
  });
});
