import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
var routes = [
    { path: 'rxjs', component: UserComponent }
];
export var RxjsRoutingModule = (function () {
    function RxjsRoutingModule() {
    }
    RxjsRoutingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule],
                },] },
    ];
    /** @nocollapse */
    RxjsRoutingModule.ctorParameters = [];
    return RxjsRoutingModule;
}());
//# sourceMappingURL=rxjs.routes.js.map