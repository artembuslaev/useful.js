import {isEmpty} from "./is-empty";

export function isNotEmpty(value: any): boolean {
    return !isEmpty(value);
}