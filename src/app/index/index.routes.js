import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IndexComponent } from './index.component';
var routes = [
    { path: 'index', component: IndexComponent }
];
export var IndexRoutingModule = (function () {
    function IndexRoutingModule() {
    }
    IndexRoutingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule],
                },] },
    ];
    /** @nocollapse */
    IndexRoutingModule.ctorParameters = [];
    return IndexRoutingModule;
}());
//# sourceMappingURL=index.routes.js.map