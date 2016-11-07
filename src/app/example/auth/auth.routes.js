import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { ProtectedComponent } from './protected.component';
import { LoggedInGuardService } from './loggedIn.guard';
var routes = [
    { path: 'auth', component: LoginComponent },
    { path: 'protected', component: ProtectedComponent, canActivate: [LoggedInGuardService] },
];
export var AuthRoutingModule = (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule],
                },] },
    ];
    /** @nocollapse */
    AuthRoutingModule.ctorParameters = [];
    return AuthRoutingModule;
}());
//# sourceMappingURL=auth.routes.js.map