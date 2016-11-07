import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
export var LoggedInGuardService = (function () {
    function LoggedInGuardService(authService) {
        this.authService = authService;
    }
    LoggedInGuardService.prototype.canActivate = function () {
        return this.authService.isLoggedIn();
    };
    LoggedInGuardService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    LoggedInGuardService.ctorParameters = [
        { type: AuthService, },
    ];
    return LoggedInGuardService;
}());
//# sourceMappingURL=loggedIn.guard.js.map