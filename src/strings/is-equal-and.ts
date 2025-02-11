import { isString } from "./is-string";

export function isEqualAnd(targetValue: string, ...values: string[]): boolean {
  if ([targetValue, ...values].some((value) => !isString(value))) {
    throw new Error('Invalid argument type');
  }

  return values.every(value => targetValue === value);
}