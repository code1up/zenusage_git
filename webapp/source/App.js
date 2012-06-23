(function() {
    var _onTap = function(inSender, inEvent) {
        this.$.hello.addContent("<br/><b>hello</b> control was tapped");
    };

    var _container = {
        kind: "app.view.Container"
    };

    enyo.kind({
        name: "App",
        kind: "enyo.Control",
        layoutKind: "enyo.FittableLayout",
        
        fit: true,
        
        components:[
            _container
        ],

        onTap: _onTap
    });
}());
