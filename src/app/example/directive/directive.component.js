import { Component } from '@angular/core';
export var DirectiveComponent = (function () {
    function DirectiveComponent() {
    }
    DirectiveComponent.prototype.ngOnInit = function () { };
    DirectiveComponent.decorators = [
        { type: Component, args: [{
                    selector: 'my-directive',
                    template: "\n        <h1>My First Attribute Directive</h1>\n        <h4>Pick a highlight color</h4>\n        <div>\n            <input type=\"radio\" name=\"colors\" (click)=\"color='lightgreen'\">Green\n            <input type=\"radio\" name=\"colors\" (click)=\"color='yellow'\">Yellow\n            <input type=\"radio\" name=\"colors\" (click)=\"color='cyan'\">Cyan\n        </div>\n        <p [myHighlight]=\"color\" [defaultColor]=\"'violet'\">Highlight me! (\u6709\u9ED8\u8BA4\u989C\u8272)</p>\n        \n        <p [myHighlight]=\"color\">Highlight me!(\u65E0\u9ED8\u8BA4\u989C\u8272)</p>\n        \n    "
                },] },
    ];
    /** @nocollapse */
    DirectiveComponent.ctorParameters = [];
    return DirectiveComponent;
}());
//# sourceMappingURL=directive.component.js.map