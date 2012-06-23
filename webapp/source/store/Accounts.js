/*
 * app.store.Accounts
 */

(function() {
    var _getAccounts = function() {
        return this.get("accounts");
    };

    var _addAccount = function(account) {
        var accounts = this.getAccounts();

        accounts.push(account);
        this.set("accounts", account);
    };

    var _deleteAccount = function(userName) {
        var accounts = this.getAccounts();

        accounts.push(account);
        this.set("accounts", account);
    };

    enyo.kind({
        name: "app.store.Account",
        kind: "app.store.LocalStore",

        getAccounts: _getAccounts,
        addAccount: _addAccount,
        deleteAccount: _deleteAccount
    }); 
}());
