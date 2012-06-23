/*
 * app.view.account.AccountsPanelFooter
 */

(function() {
    // TODO: add a tooltip
    var _addButton = {
        kind: "onyx.Button",
        classes: "onyx-blue",
        content: "Add"
    }

    var _spacer = {
        fit: true
    };

    enyo.kind({
        name: "app.view.account.AccountsPanelFooter",
        kind: "onyx.Toolbar",
        layoutKind: "enyo.FittableColumnsLayout",

        components: [
            _spacer,
            _addButton
        ]
    });
}());
