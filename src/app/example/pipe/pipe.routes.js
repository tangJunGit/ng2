import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PipeComponent } from './pipe.component';
var routes = [
    { path: 'pipe', component: PipeComponent },
];
export var PipeRoutingModule = (function () {
    function PipeRoutingModule() {
    }
    PipeRoutingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule],
                },] },
    ];
    /** @nocollapse */
    PipeRoutingModule.ctorParameters = [];
    return PipeRoutingModule;
}());
//# sourceMappingURL=pipe.routes.js.map