/*funcunit@3.1.0-pre.0#browser/adapters/mocha*/
define(function (require, exports, module) {
    var FuncUnit = require('../core');
    var ok = function (expr, msg) {
        if (!expr)
            throw new Error(msg);
    };
    module.exports = function (mocha) {
        FuncUnit.timeout = 1900;
        return {
            pauseTest: function () {
            },
            resumeTest: function () {
            },
            assertOK: function (assertion, message) {
                ok(assertion, message);
            },
            equiv: function (expected, actual) {
                return expected == actual;
            }
        };
    };
});