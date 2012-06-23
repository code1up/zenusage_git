/*
 * app.store.LocalStore
 */

(function() {
    var _set = function(name, value) {
        app.util.Assure.assureString(name);
        app.util.Assure._assureObject(value);

        var stringValue = typeof value === "string" ?
            value : JSON.stringify(value);

        localStorage.setItem(name, stringValue);
    };

    var _get = function(name) {
        app.util.Assure.assureString(name);

        var stringValue = localStorage.getItem(name);

        if (!value) {
            return null;
        }

        var value = JSON.parse(stringValue);

        return value;
    };

    var _remove = function(name) {
        app.util.Assure.assureString(name);

        localStorage.remove(name);
    };

    enyo.kind({
        name: "app.store.LocalStore",
        kind: "enyo.Component",

        set: _set,
        get: _get,
        remove: _remove
    });
}());
