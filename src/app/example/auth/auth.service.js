import { Injectable } from '@angular/core';
export var AuthService = (function () {
    function AuthService() {
    }
    AuthService.prototype.login = function (user, password) {
        if (user === 'user' && password === 'password') {
            localStorage.setItem('username', user);
            return true;
        }
        return false;
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('username');
    };
    AuthService.prototype.getUser = function () {
        return localStorage.getItem('username');
    };
    AuthService.prototype.isLoggedIn = function () {
        return this.getUser() !== null;
    };
    AuthService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    AuthService.ctorParameters = [];
    return AuthService;
}());
export var AUTH_PROVIDERS = [
    { provide: AuthService, userClass: AuthService }
];
//# sourceMappingURL=auth.service.js.map