/*
 * app.view.service.ServicePanelToolbar
 */

(function() {
    var _grabber = {
        kind: "onyx.Grabber"
    };

    var _caption = {
        content: "Service",
        fit: true
    };

    enyo.kind({
        name: "app.view.service.ServicePanelToolbar",
        kind: "onyx.Toolbar",

        components: [
            _grabber,
            _caption
        ]
    });
}());
