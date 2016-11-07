import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { CountdownTimerComponent } from './timer.component';
export var CommunicationComponent = (function () {
    function CommunicationComponent() {
    }
    CommunicationComponent.prototype.ngOnInit = function () { };
    CommunicationComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.seconds = function () { return _this.timerComponent.seconds; }; //覆盖方法seconds();
    };
    CommunicationComponent.prototype.seconds = function () { return 10; };
    CommunicationComponent.prototype.start = function () { this.timerComponent.start(); };
    CommunicationComponent.prototype.stop = function () { this.timerComponent.stop(); };
    CommunicationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'my-communication',
                    template: "\n        <h1>\u7236\u7EC4\u4EF6\u4E0E\u5B50\u7EC4\u4EF6\u901A\u8FC7 \u672C\u5730\u53D8\u91CF \u4E92\u52A8</h1>\n        <button (click)=\"timer.start()\">Start</button>\n        <button (click)=\"timer.stop()\">Stop</button>\n        <div class=\"seconds\">{{timer.seconds}}</div>\n\n        <hr />\n\n        <h1>\u7236\u7EC4\u4EF6\u8C03\u7528 ViewChild</h1>\n        <button (click)=\"start()\">Start</button>\n        <button (click)=\"stop()\">Stop</button>\n        <div class=\"seconds\">{{ seconds() }}</div>\n\n        <hr />\n\n        <h1>\u5B50\u7EC4\u4EF6\uFF1A</h1>\n        <countdown-timer #timer></countdown-timer>  \n\n        <hr />\n\n        <h1>\u7236\u7EC4\u4EF6\u548C\u5B50\u7EC4\u4EF6\u901A\u8FC7\u670D\u52A1\u6765\u901A\u8BAF</h1>\n        <button [routerLink]=\"['../service1-communication']\">demo</button>\n        \n    "
                },] },
    ];
    /** @nocollapse */
    CommunicationComponent.ctorParameters = [];
    CommunicationComponent.propDecorators = {
        'timerComponent': [{ type: ViewChild, args: [CountdownTimerComponent,] },],
    };
    return CommunicationComponent;
}());
//# sourceMappingURL=comm.component.js.map