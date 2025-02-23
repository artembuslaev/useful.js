import { isEmpty } from 'strings';

describe('isEmpty', () => {
  it('should return true for empty value', () => {
    expect(isEmpty('')).toBe(true);
  });
});
