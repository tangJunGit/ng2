import { Component } from '@angular/core';
import { StompService } from './stomp.service';
export var StompComponent = (function () {
    function StompComponent(stompService) {
        this.stompService = stompService;
        this.imei = ['864695020005882'];
    }
    StompComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.onconnect();
        //接受收据
        this.stompService.messages.subscribe(function (message) {
            _this.messages = message;
        });
        //接受状态
        this.stompService.state.subscribe(function (state) {
            _this.state = state;
        });
    };
    StompComponent.prototype.ngOnDestroy = function () {
        this.stompService.on_disconnect();
    };
    StompComponent.prototype.onconnect = function (imei) {
        this.stompService.on_connect(imei);
    };
    StompComponent.prototype.onsubscribe = function () {
        this.stompService.on_subscribe(this.imei);
    };
    StompComponent.prototype.onunsubscribe = function () {
        this.stompService.on_unsubscribe(this.imei);
    };
    StompComponent.decorators = [
        { type: Component, args: [{
                    selector: 'stomp-demo',
                    template: "\n        <h1>Stomp</h1>\n        <button class=\"default\" (click)=\"onsubscribe()\">\u8BA2\u9605</button>\n        <button class=\"default\" (click)=\"onunsubscribe()\">\u53D6\u6D88\u8BA2\u9605</button>\n        <span>{{state}}</span>\n        <pre>{{messages | json}}</pre>\n    "
                },] },
    ];
    /** @nocollapse */
    StompComponent.ctorParameters = [
        { type: StompService, },
    ];
    return StompComponent;
}());
//# sourceMappingURL=stomp-demo.component.js.map