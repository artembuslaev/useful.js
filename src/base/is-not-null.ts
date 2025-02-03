import {isNull} from "./is-null";

export function isNotNull(value: any): boolean {
    return !isNull(value);
}