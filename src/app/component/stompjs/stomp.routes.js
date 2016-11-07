import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StompComponent } from './stomp-demo.component';
var routes = [
    { path: 'stomp', component: StompComponent },
];
export var StompRoutingModule = (function () {
    function StompRoutingModule() {
    }
    StompRoutingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule],
                },] },
    ];
    /** @nocollapse */
    StompRoutingModule.ctorParameters = [];
    return StompRoutingModule;
}());
//# sourceMappingURL=stomp.routes.js.map