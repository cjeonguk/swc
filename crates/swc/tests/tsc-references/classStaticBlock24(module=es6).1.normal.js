//// [classStaticBlock24.ts]
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
export var C = function C() {
    "use strict";
    _class_call_check(this, C);
};
var __ = {
    writable: true,
    value: function() {
        C.x = 1;
    }()
};
