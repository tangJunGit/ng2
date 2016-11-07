import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommunicationComponent } from './comm.component';
import { Service1CommonComponent } from './service1-comm.component';
var routes = [
    { path: 'communication', component: CommunicationComponent },
    { path: 'service1-communication', component: Service1CommonComponent },
];
export var CommRoutingModule = (function () {
    function CommRoutingModule() {
    }
    CommRoutingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule],
                },] },
    ];
    /** @nocollapse */
    CommRoutingModule.ctorParameters = [];
    return CommRoutingModule;
}());
//# sourceMappingURL=comm.routes.js.map