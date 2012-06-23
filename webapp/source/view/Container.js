/*
 * app.view.Container
 */

(function() {
    var _accountsPanel = {
        kind: "app.view.account.AccountsPanel"
    };

    var _servicesPanel = {
        kind: "app.view.service.ServicesPanel"
    };

    var _servicePanel = {
        kind: "app.view.service.ServicePanel"
    };

    enyo.kind({
        name: "app.view.Container",
        kind: "enyo.Panels",
        arrangerKind: "enyo.CollapsingArranger",

        fit: true,

        components: [
            _accountsPanel,
            _servicesPanel,
            _servicePanel
        ]
    });
}());
