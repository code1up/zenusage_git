/*
 * app.util.Assure
 */

(function() {
    var _message = function(name, err) {
        name = name || "<unknown>";

        return "ERROR: " + name + " " + err + ".";
    };

    var _assureString = function(name, value) {
        if (!enyo.isString(value)) {
            throw _message(name, "is not a string");
        }
    };

    var _assureObject = function(name, obj) {
        if (typeof obj !== "object") {
            throw _message(name, "is not an object");
        }
    };

    var _assureFunction = function(name, fn) {
        if (!enyo.isFunction(fn)) {
            throw _message(name, "is not a function");
        }
    };

    var _assureArray = function(arr) {
        if (!enyo.isArray(arr)) {
            throw _message(name, "is not an array");
        }
    };

    enyo.kind({
        statics: {
            assureString: _assureString,
            assureValue: _assureValue,
            assureFunction: _assureFunction,
            assureArray: _assureArray
        }
    });
}());
