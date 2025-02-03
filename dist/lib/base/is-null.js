"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNull = isNull;
var is_undefined_1 = require("./is-undefined");
function isNull(value) {
    return (0, is_undefined_1.isUndefined)(value) || value === null;
}
//# sourceMappingURL=is-null.js.map