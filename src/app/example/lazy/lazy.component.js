import { Component } from '@angular/core';
export var LazyComponent = (function () {
    function LazyComponent() {
    }
    LazyComponent.prototype.ngOnInit = function () { };
    LazyComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lazy-demo',
                    template: "\n        <h2>\u61D2\u52A0\u8F7D loadchildren</h2>\n    "
                },] },
    ];
    /** @nocollapse */
    LazyComponent.ctorParameters = [];
    return LazyComponent;
}());
//# sourceMappingURL=lazy.component.js.map