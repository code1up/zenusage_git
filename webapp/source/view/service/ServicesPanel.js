/*
 * app.view.service.ServicesPanel
 */

(function() {
    var _toolbar = {
        kind: "app.view.service.ServicesPanelToolbar"
    };

    enyo.kind({
        name: "app.view.service.ServicesPanel",
        kind: "enyo.Control",

        classes: "app-view-services-panel",
        content: "ServicesPanel",

        components: [
            _toolbar
        ]
    });  
}());
