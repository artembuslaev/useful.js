import {isNull} from "src/base";

export function isEmpty(value: any): boolean {
    return isNull(value) || value === '';
}