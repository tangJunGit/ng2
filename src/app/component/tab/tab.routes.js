import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TabDemoComponent } from './tab-demo.component';
var routes = [
    { path: 'tab', component: TabDemoComponent },
];
export var TabRoutingModule = (function () {
    function TabRoutingModule() {
    }
    TabRoutingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule],
                },] },
    ];
    /** @nocollapse */
    TabRoutingModule.ctorParameters = [];
    return TabRoutingModule;
}());
//# sourceMappingURL=tab.routes.js.map