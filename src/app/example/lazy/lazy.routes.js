import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LazyComponent } from './lazy.component';
var routes = [
    {
        path: "",
        component: LazyComponent,
    }
];
export var LazyRoutingModule = (function () {
    function LazyRoutingModule() {
    }
    LazyRoutingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule],
                },] },
    ];
    /** @nocollapse */
    LazyRoutingModule.ctorParameters = [];
    return LazyRoutingModule;
}());
//# sourceMappingURL=lazy.routes.js.map