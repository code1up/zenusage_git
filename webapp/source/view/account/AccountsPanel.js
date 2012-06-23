/*
 * app.view.account.AccountsPanel
 */

(function() {
    var _toolbar = {
        kind: app.view.account.AccountsPanelToolbar
    };

    var _footer = {
        kind: app.view.account.AccountsPanelFooter
    };

    var _spacer = {
        fit: true
    };

    enyo.kind({
        name: "app.view.account.AccountsPanel",

        classes: "app-view-accounts-panel",
        layoutKind: "enyo.FittableRowsLayout",

        components: [
            _toolbar,
            _spacer,
            _footer
        ]
    });  
}());
