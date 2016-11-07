import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/RX';
export var UserService = (function () {
    function UserService() {
        this.currentUser = new BehaviorSubject(null); //设置流 默认值为null
    }
    UserService.prototype.setCurrentUser = function (newUser) {
        this.currentUser.next(newUser);
    };
    UserService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    UserService.ctorParameters = [];
    return UserService;
}());
//# sourceMappingURL=user.service.js.map