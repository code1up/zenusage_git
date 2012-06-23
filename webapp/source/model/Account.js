/*
 * app.model.Account
 */

(function() {
    enyo.kind({
        name: "app.model.Account",

        published: {
            userName: "",
            password: "",
            userToken: "",
            lastAuthenticated: 0,

            services: []
        }
    }); 
}());
