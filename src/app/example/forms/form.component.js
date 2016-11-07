import { Component } from '@angular/core';
export var FormComponent = (function () {
    function FormComponent() {
        this.sku = "ABC";
    }
    FormComponent.prototype.ngOnInit = function () { };
    FormComponent.prototype.onSubmit = function (value) {
        console.log('you submitted value: ', value);
    };
    FormComponent.decorators = [
        { type: Component, args: [{
                    selector: 'my-form',
                    template: "\n        <div class=\"col-md-6\">\n            <h2>Demo Form: SKU</h2>\n            <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f.value)\">\n                <div class=\"form-group\">\n                    <label for=\"skuInput\">SKU</label>\n                    <input type=\"text\" id=\"skuInput\" class=\"form-control\" placeholder=\"SKU\" \n                    name=\"sku\" [(ngModel)]=\"sku\">\n                </div>\n                <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n            </form>\n        </div>\n    "
                },] },
    ];
    /** @nocollapse */
    FormComponent.ctorParameters = [];
    return FormComponent;
}());
//# sourceMappingURL=form.component.js.map