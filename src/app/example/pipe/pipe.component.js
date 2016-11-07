import { Component } from '@angular/core';
export var PipeComponent = (function () {
    function PipeComponent() {
        this.birthday = new Date(2016, 10, 1);
        this.power = 5;
        this.factor = 1;
    }
    PipeComponent.prototype.ngOnInit = function () { };
    PipeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'my-pipe',
                    template: "\n        <h2>\u5185\u7F6E\u7BA1\u9053</h2>\n        <p>\u751F\u65E5\u65F6\u95F4: {{ birthday | date:\"yyyy/MM/dd\" }} </p>\n        <h2>\u81EA\u5B9A\u4E49\u7BA1\u9053</h2>\n        <div>power: <input [(ngModel)]=\"power\"></div>\n        <div>factor: <input [(ngModel)]=\"factor\"></div>\n        <p>\u6307\u6570\u7B97\u6CD5: {{power | exponentialStrength: factor}}</p>\n    "
                },] },
    ];
    /** @nocollapse */
    PipeComponent.ctorParameters = [];
    return PipeComponent;
}());
//# sourceMappingURL=pipe.component.js.map