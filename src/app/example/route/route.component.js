import { Component } from '@angular/core';
export var RouteDemoComponent = (function () {
    function RouteDemoComponent() {
        this.id = '1';
        this.id2 = '2';
    }
    RouteDemoComponent.prototype.ngOnInit = function () { };
    RouteDemoComponent.decorators = [
        { type: Component, args: [{
                    selector: 'my-route',
                    template: "\n        <button class=\"btn\" [routerLink]=\"['./', id, id2, {title:'ng2'}]\" routerLinkActive=\"active\">\u663E\u793A\u4F20\u9012\u53C2\u6570 \uFF08id:1,id2:2,title:'ng2'\uFF09</button>\n        <hr>\n        <router-outlet></router-outlet>\n    "
                },] },
    ];
    /** @nocollapse */
    RouteDemoComponent.ctorParameters = [];
    return RouteDemoComponent;
}());
//# sourceMappingURL=route.component.js.map