import { Component } from '@angular/core';
import { AuthService } from './auth.service';
export var LoginComponent = (function () {
    function LoginComponent(authService) {
        this.authService = authService;
        this.message = '';
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.login = function (username, password) {
        this.message = '';
        if (!this.authService.login(username, password)) {
            this.message = '不正确的凭证 -- 用户名/密码：user/password';
            setTimeout(function () {
                this.message = '';
            }.bind(this), 2500);
        }
        return false;
    };
    LoginComponent.prototype.logout = function () {
        this.authService.logout();
        return false;
    };
    LoginComponent.decorators = [
        { type: Component, args: [{
                    selector: 'auth-demo',
                    template: " \n        <h2>\u5B88\u536B <small><a [routerLink]=\"['/protected']\">Protected</a></small></h2>\n        <form class=\"form-inline\" *ngIf=\"!authService.getUser()\">\n            <div class=\"form-group\">\n                <label for=\"username\">User:</label>\n                <input class=\"form-control\" name=\"username\" #username>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"password\">Password:</label>\n                <input class=\"form-control\" type=\"password\" name=\"password\" #password>\n            </div>\n            <a class=\"btn btn-default\" (click)=\"login(username.value, password.value)\">Submit</a>\n        </form>\n\n        <div class=\"well\" *ngIf=\"authService.getUser()\">\n            \u767B\u5F55\u7528\u6237\u540D\uFF1A <b>{{ authService.getUser() }}</b>\n            <a href (click)=\"logout()\">Log out</a>\n        </div>\n\n        <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"message\">{{ message }}</div>\n    "
                },] },
    ];
    /** @nocollapse */
    LoginComponent.ctorParameters = [
        { type: AuthService, },
    ];
    return LoginComponent;
}());
//# sourceMappingURL=login.component.js.map