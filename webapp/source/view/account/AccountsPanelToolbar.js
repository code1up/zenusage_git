/*
 * app.view.account.AccountsPanelToolbar
 */

(function() {
    var _grabber = {
        kind: "onyx.Grabber"
    };

    var _caption = {
        content: "Accounts"
    };

    // TODO: add a tooltip
    var _addButton = {
        kind: "onyx.Button",
        classes: "onyx-blue",
        content: "Add"
    }

    enyo.kind({
        name: "app.view.account.AccountsPanelToolbar",
        kind: "onyx.Toolbar",

        components: [
            _grabber,
            _caption
        ]
    });
}());
