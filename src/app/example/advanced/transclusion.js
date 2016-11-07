import { Component } from '@angular/core';
export var MessageComponent = (function () {
    function MessageComponent() {
    }
    MessageComponent.prototype.ngOnInit = function () { };
    MessageComponent.decorators = [
        { type: Component, args: [{
                    selector: '[message]',
                    inputs: ['header'],
                    host: {
                        'class': 'panel panel-default'
                    },
                    template: "\n        <div class=\"panel-heading\">{{header}}</div>\n        <div class=\"panel-body\">\n            <ng-content></ng-content>\n        </div>\n    "
                },] },
    ];
    /** @nocollapse */
    MessageComponent.ctorParameters = [];
    return MessageComponent;
}());
//# sourceMappingURL=transclusion.js.map