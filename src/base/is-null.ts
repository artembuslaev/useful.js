import { isUndefined } from './is-undefined';

export function isNull(value: unknown): value is (null | undefined) {
  return isUndefined(value) || value === null;
}
