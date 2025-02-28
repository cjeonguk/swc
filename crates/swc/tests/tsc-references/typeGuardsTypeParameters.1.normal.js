//// [typeGuardsTypeParameters.ts]
// Type guards involving type parameters produce intersection types
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
import _instanceof from "@swc/helpers/src/_instanceof.mjs";
var C = function C() {
    "use strict";
    _class_call_check(this, C);
};
function f1(x) {
    if (_instanceof(x, C)) {
        var v1 = x;
        var v2 = x;
        x.prop;
    }
}
function f2(x) {
    if (typeof x === "string") {
        var v1 = x;
        var v2 = x;
        x.length;
    }
}
// Repro from #13872
function fun(item) {
    var strings = [];
    for(var key in item){
        var value = item[key];
        if (typeof value === "string") {
            strings.push(value);
        }
    }
}
