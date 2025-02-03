"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUndefined = isUndefined;
exports.isNotUndefined = isNotUndefined;
exports.isNull = isNull;
exports.isNotNull = isNotNull;
exports.isEmpty = isEmpty;
exports.isNotEmpty = isNotEmpty;
function isUndefined(value) {
    return value === undefined;
}
function isNotUndefined(value) {
    return !isUndefined(value);
}
function isNull(value) {
    return isUndefined(value) || value === null;
}
function isNotNull(value) {
    return !isNull(value);
}
function isEmpty(value) {
    return isNull(value) || value === '';
}
function isNotEmpty(value) {
    return !isEmpty(value);
}
//# sourceMappingURL=index.js.map