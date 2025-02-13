import { isUndefined } from 'base';

describe('isUndefined', () => {
  it('should return true for undefined value', () => {
    expect(isUndefined(undefined)).toBe(true);
  });
});
