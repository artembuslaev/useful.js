import { isNumber } from './is-number';

type NotNumber<T> = T extends number ? never : T;

export function isNotNumber<T>(value: T): value is NotNumber<T> {
  return !isNumber(value);
}
