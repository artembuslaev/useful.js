import { isNull } from './is-null';

export function isNotNull(value: unknown): boolean {
  return !isNull(value);
}
