import { isUndefined } from './is-undefined';

export function isNotUndefined(value: unknown): boolean {
  return !isUndefined(value);
}
