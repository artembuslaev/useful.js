import { isNull } from '../base';

export function isEmpty(value: unknown): boolean {
  return isNull(value) || value === '';
}
