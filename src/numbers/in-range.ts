import { isNotUndefined, isUndefined } from '../base';

type Interval = { start?: number; end?: number };

export function inRange(
  value: number,
  { start, end }: Interval,
  { includeBorders }: { includeBorders?: boolean } = {},
): boolean {
  const greater: (a: number, b: number) => boolean =
    includeBorders ? (a, b) => a >= b : (a, b) => a > b;
  const less: (a: number, b: number) => boolean =
    includeBorders ? (a, b) => a <= b : (a, b) => a < b;

  if (isNotUndefined(start) && isUndefined(end)) {
    return greater(value, start);
  }

  if (isUndefined(start) && isNotUndefined(end)) {
    return less(value, end);
  }

  if (isNotUndefined(start) && isNotUndefined(end)) {
    return greater(value, start) && less(value, end);
  }

  return true;
}
