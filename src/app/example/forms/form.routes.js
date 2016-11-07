import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormComponent } from './form.component';
import { FormBuilderComponent } from './form-builder.component';
import { ValidationComponent } from './validation.component';
var routes = [
    { path: 'form', component: FormComponent },
    { path: 'form-builder', component: FormBuilderComponent },
    { path: 'form-validation', component: ValidationComponent }
];
export var FormRoutingModule = (function () {
    function FormRoutingModule() {
    }
    FormRoutingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule],
                },] },
    ];
    /** @nocollapse */
    FormRoutingModule.ctorParameters = [];
    return FormRoutingModule;
}());
//# sourceMappingURL=form.routes.js.map