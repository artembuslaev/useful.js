export function inRange(value: number, min: number, max: number, strict: boolean = false): boolean {
  return strict 
    ? value > min && value < max 
    : value >= min && value <= max;
}
