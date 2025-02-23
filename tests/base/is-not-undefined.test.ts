import { isNotUndefined } from 'base';

describe('isNotUndefined', () => {
  it('should return false for undefined value', () => {
    expect(isNotUndefined(undefined)).toBe(false);
  });
});
