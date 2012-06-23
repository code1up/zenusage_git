/*
 * app.view.service.ServicePanel
 */

(function() {
    var _toolbar = {
        kind: "app.view.service.ServicePanelToolbar"
    };

    enyo.kind({
        name: "app.view.service.ServicePanel",
        kind: "enyo.Control",

        classes: "app-view-service-panel",
        content: "ServicePanel",

        components: [
            _toolbar
        ]
    });  
}());
