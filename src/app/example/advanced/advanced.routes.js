import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdvancedDemoComponent } from './advanced.component';
var routes = [
    { path: 'advanced', component: AdvancedDemoComponent },
];
export var AdvancedRoutingModule = (function () {
    function AdvancedRoutingModule() {
    }
    AdvancedRoutingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule],
                },] },
    ];
    /** @nocollapse */
    AdvancedRoutingModule.ctorParameters = [];
    return AdvancedRoutingModule;
}());
//# sourceMappingURL=advanced.routes.js.map