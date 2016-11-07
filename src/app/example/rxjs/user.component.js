import { Component } from '@angular/core';
import { UserService } from './user.service';
export var UserComponent = (function () {
    function UserComponent(userService) {
        var _this = this;
        this.userService = userService;
        //订阅
        userService.currentUser.subscribe(function (newUser) {
            _this.newUser = newUser;
        });
    }
    UserComponent.prototype.ngOnInit = function () { };
    UserComponent.prototype.setUser = function () {
        var user = {
            id: '1101',
            name: '阿凡达',
            avatarSrc: 'www.avatar.com'
        };
        this.userService.setCurrentUser(user); //发送
    };
    UserComponent.decorators = [
        { type: Component, args: [{
                    selector: 'my-user',
                    template: "\n        <button (click)=\"setUser()\">\u53D1\u9001</button>\n        <p>\u63A5\u53D7\u6570\u636E\uFF1A</p>\n        <pre>{{newUser | json }}</pre>\n    ",
                    providers: [UserService]
                },] },
    ];
    /** @nocollapse */
    UserComponent.ctorParameters = [
        { type: UserService, },
    ];
    return UserComponent;
}());
//# sourceMappingURL=user.component.js.map