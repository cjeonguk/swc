//// [test.ts]
(function(global, factory) {
    if (typeof module === "object" && typeof module.exports === "object") factory(exports, require("@swc/helpers/src/_async_to_generator.mjs"), require("@swc/helpers/src/_class_call_check.mjs"), require("@swc/helpers/src/_interop_require_wildcard.mjs"), require("@swc/helpers/src/_ts_generator.mjs"));
    else if (typeof define === "function" && define.amd) define([
        "exports",
        "@swc/helpers/src/_async_to_generator.mjs",
        "@swc/helpers/src/_class_call_check.mjs",
        "@swc/helpers/src/_interop_require_wildcard.mjs",
        "@swc/helpers/src/_ts_generator.mjs"
    ], factory);
    else if (global = typeof globalThis !== "undefined" ? globalThis : global || self) factory(global.testTs = {}, global.asyncToGeneratorMjs, global.classCallCheckMjs, global.interopRequireWildcardMjs, global.tsGeneratorMjs);
})(this, function(exports, _asyncToGenerator, _classCallCheck, _interopRequireWildcard, _tsGenerator) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    function _export(target, all) {
        for(var name in all)Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
        });
    }
    _export(exports, {
        fn: function() {
            return fn;
        },
        cl1: function() {
            return cl1;
        },
        obj: function() {
            return obj;
        },
        cl2: function() {
            return cl2;
        },
        l: function() {
            return l;
        }
    });
    _asyncToGenerator = _asyncToGenerator.default;
    _classCallCheck = _classCallCheck.default;
    _interopRequireWildcard = _interopRequireWildcard.default;
    _tsGenerator = _tsGenerator.default;
    function fn() {
        return _fn.apply(this, arguments);
    }
    function _fn() {
        _fn = _asyncToGenerator(function() {
            var req;
            return _tsGenerator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            import("./test") // ONE
                        ];
                    case 1:
                        req = _state.sent();
                        return [
                            2
                        ];
                }
            });
        });
        return _fn.apply(this, arguments);
    }
    var cl1 = /*#__PURE__*/ function() {
        "use strict";
        function cl1() {
            _classCallCheck(this, cl1);
        }
        var _proto = cl1.prototype;
        _proto.m = function m() {
            return _asyncToGenerator(function() {
                var req;
                return _tsGenerator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                import("./test") // TWO
                            ];
                        case 1:
                            req = _state.sent();
                            return [
                                2
                            ];
                    }
                });
            })();
        };
        return cl1;
    }();
    var obj = {
        m: /*#__PURE__*/ _asyncToGenerator(function() {
            var req;
            return _tsGenerator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            import("./test") // THREE
                        ];
                    case 1:
                        req = _state.sent();
                        return [
                            2
                        ];
                }
            });
        })
    };
    var cl2 = function cl2() {
        "use strict";
        _classCallCheck(this, cl2);
        this.p = {
            m: /*#__PURE__*/ _asyncToGenerator(function() {
                var req;
                return _tsGenerator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                import("./test") // FOUR
                            ];
                        case 1:
                            req = _state.sent();
                            return [
                                2
                            ];
                    }
                });
            })
        };
    };
    var l = function() {
        var _ref = _asyncToGenerator(function() {
            var req;
            return _tsGenerator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            import("./test") // FIVE
                        ];
                    case 1:
                        req = _state.sent();
                        return [
                            2
                        ];
                }
            });
        });
        return function l() {
            return _ref.apply(this, arguments);
        };
    }();
});
