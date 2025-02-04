import {isNull} from "base";

export function isEmpty(value: any): boolean {
    return isNull(value) || value === '';
}