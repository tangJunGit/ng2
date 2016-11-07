import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormRoutingModule } from './form.routes';
import { FormComponent } from './form.component';
import { FormBuilderComponent } from './form-builder.component';
import { ValidationComponent } from './validation.component';
export var FormDemoModule = (function () {
    function FormDemoModule() {
    }
    FormDemoModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        FormsModule,
                        ReactiveFormsModule,
                        FormRoutingModule
                    ],
                    exports: [],
                    declarations: [
                        FormComponent,
                        FormBuilderComponent,
                        ValidationComponent
                    ],
                    providers: [],
                },] },
    ];
    /** @nocollapse */
    FormDemoModule.ctorParameters = [];
    return FormDemoModule;
}());
//# sourceMappingURL=form.module.js.map