import { Component } from '@angular/core';
export var ProtectedComponent = (function () {
    function ProtectedComponent() {
    }
    ProtectedComponent.prototype.ngOnInit = function () { };
    ProtectedComponent.decorators = [
        { type: Component, args: [{
                    selector: 'protected',
                    template: "\n        <h1>Protected content</h1>\n    "
                },] },
    ];
    /** @nocollapse */
    ProtectedComponent.ctorParameters = [];
    return ProtectedComponent;
}());
//# sourceMappingURL=protected.component.js.map