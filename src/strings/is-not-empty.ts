import { isEmpty } from './is-empty';

export function isNotEmpty(value: unknown): boolean {
  return !isEmpty(value);
}
