import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DirectiveComponent } from './directive.component';
var routes = [
    { path: 'directive', component: DirectiveComponent },
];
export var DirectiveRoutingModule = (function () {
    function DirectiveRoutingModule() {
    }
    DirectiveRoutingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule],
                },] },
    ];
    /** @nocollapse */
    DirectiveRoutingModule.ctorParameters = [];
    return DirectiveRoutingModule;
}());
//# sourceMappingURL=directive.routes.js.map