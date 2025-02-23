import { isNull } from './is-null';

export function isNotNull<T>(value: T): value is NonNullable<T> {
  return !isNull(value);
}
