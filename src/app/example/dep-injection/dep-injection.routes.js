import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DepInjectionComponent } from './dep-injection.component';
var routes = [
    { path: 'dep-injection', component: DepInjectionComponent },
];
export var DepInjectionRoutingModule = (function () {
    function DepInjectionRoutingModule() {
    }
    DepInjectionRoutingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule],
                },] },
    ];
    /** @nocollapse */
    DepInjectionRoutingModule.ctorParameters = [];
    return DepInjectionRoutingModule;
}());
//# sourceMappingURL=dep-injection.routes.js.map