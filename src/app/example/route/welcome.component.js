import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
export var WelcomeComponent = (function () {
    function WelcomeComponent(route) {
        this.route = route;
    }
    WelcomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        //获取预加载数据
        this.route.data.subscribe(function (data) {
            _this.data = data;
        });
    };
    WelcomeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'my-welcome',
                    template: "\n        <h2>Welcome!</h2>\n        <p>\u9884\u52A0\u8F7D</p>\n        <pre>{{data | json}}</pre>\n    "
                },] },
    ];
    /** @nocollapse */
    WelcomeComponent.ctorParameters = [
        { type: ActivatedRoute, },
    ];
    return WelcomeComponent;
}());
//# sourceMappingURL=welcome.component.js.map