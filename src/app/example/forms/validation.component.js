import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { skuValidator } from './custom-validations';
export var ValidationComponent = (function () {
    function ValidationComponent(fb) {
        this.myForm = fb.group({
            'sku': ['', Validators.compose([
                    Validators.required,
                    skuValidator
                ])]
        });
        //监听sku值改变
        this.sku = this.myForm.controls['sku'];
        this.sku.valueChanges.subscribe(function (value) {
            console.log('sku changed to:', value);
        });
        ////监听表单改变
        this.myForm.valueChanges.subscribe(function (form) {
            console.log('form changed to:', form);
        });
    }
    ValidationComponent.prototype.ngOnInit = function () { };
    ValidationComponent.prototype.onSubmit = function (value) {
        console.log('you submitted value: ', value);
    };
    ValidationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'form-validation',
                    template: "\n        <div class=\"col-md-6\">\n            <h2>Demo FormValidation: SKU</h2>\n            <form [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit(myForm.value)\">\n                <div class=\"form-group\">\n                    <label for=\"skuInput\">SKU</label>\n                    <input type=\"text\" id=\"skuInput\" class=\"form-control\" \n                    [formControl]=\"myForm.controls['sku']\" placeholder=\"SKU\">\n                    <div class=\"alert alert-danger\" role=\"alert\" [hidden]=\"myForm.controls['sku'].valid\">SKU is invalid</div>\n                    <div class=\"alert alert-danger\" role=\"alert\" [hidden]=\"!myForm.controls['sku'].hasError('required')\">SKU is required</div>\n                    <div class=\"alert alert-danger\" role=\"alert\" [hidden]=\"!myForm.controls['sku'].hasError('invalidSku')\">SKU must begin with '123' </div>\n                </div>\n                <div class=\"alert alert-danger\" [hidden]=\"myForm.valid\">Form is invalid</div>\n                <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n            </form>\n        </div>\n    "
                },] },
    ];
    /** @nocollapse */
    ValidationComponent.ctorParameters = [
        { type: FormBuilder, },
    ];
    return ValidationComponent;
}());
//# sourceMappingURL=validation.component.js.map