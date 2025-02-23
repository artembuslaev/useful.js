import { isUndefined } from './is-undefined';

type NotUndefined<T> = T extends undefined ? never : T;

export function isNotUndefined<T>(value: T): value is NotUndefined<T> {
  return !isUndefined(value);
}
