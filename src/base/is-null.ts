import { isUndefined } from './is-undefined';

export function isNull(value: unknown): boolean {
  return isUndefined(value) || value === null;
}
