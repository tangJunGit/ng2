import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
export var FormBuilderComponent = (function () {
    function FormBuilderComponent(fb) {
        this.myForm = fb.group({
            'sku': ['ABC123']
        });
    }
    FormBuilderComponent.prototype.ngOnInit = function () { };
    FormBuilderComponent.prototype.onSubmit = function (value) {
        console.log('you submitted value: ', value);
    };
    FormBuilderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'form-builder-demo',
                    template: "\n        <div class=\"col-md-6\">\n            <h2>Demo FormBuilder: SKU</h2>\n            <form [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit(myForm.value)\">\n                <div class=\"form-group\">\n                    <label for=\"skuInput\">SKU</label>\n                    <input type=\"text\" id=\"skuInput\" class=\"form-control\" \n                    [formControl]=\"myForm.controls['sku']\" placeholder=\"SKU\">\n                </div>\n                <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n            </form>\n        </div>\n    "
                },] },
    ];
    /** @nocollapse */
    FormBuilderComponent.ctorParameters = [
        { type: FormBuilder, },
    ];
    return FormBuilderComponent;
}());
//# sourceMappingURL=form-builder.component.js.map