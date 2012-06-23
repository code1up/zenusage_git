/*
 * app.model.Client
 */

(function() {
    enyo.kind({
        name: "app.model.Client",

        published: {
            clientToken: "",
            lastAuthenticated: 0
        }
    }); 
}());
