import {isUndefined} from "./is-undefined";

export function isNull(value: any): boolean {
    return isUndefined(value) || value === null;
}