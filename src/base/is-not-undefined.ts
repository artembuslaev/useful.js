import {isUndefined} from "./is-undefined";

export function isNotUndefined(value: any): boolean {
    return !isUndefined(value);
}