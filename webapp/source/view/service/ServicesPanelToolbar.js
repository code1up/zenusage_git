/*
 * app.view.service.ServicesPanelToolbar
 */

(function() {
    var _grabber = {
        kind: "onyx.Grabber"
    };

    var _caption = {
        content: "Services",
        fit: true
    };

    enyo.kind({
        name: "app.view.service.ServicesPanelToolbar",
        kind: "onyx.Toolbar",

        components: [
            _grabber,
            _caption
        ]
    });
}());
