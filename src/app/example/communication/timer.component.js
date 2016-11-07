import { Component } from '@angular/core';
export var CountdownTimerComponent = (function () {
    function CountdownTimerComponent() {
        this.intervalId = 0;
        this.message = '';
        this.seconds = 10;
    }
    CountdownTimerComponent.prototype.ngOnInit = function () { this.start(); };
    CountdownTimerComponent.prototype.ngOnDestroy = function () { this.clearTimer(); };
    CountdownTimerComponent.prototype.start = function () {
        this.countDown();
    };
    CountdownTimerComponent.prototype.stop = function () {
        this.clearTimer();
        this.message = "\u6682\u505C\u5230 " + this.seconds + " \u79D2";
    };
    CountdownTimerComponent.prototype.clearTimer = function () {
        clearInterval(this.intervalId);
    };
    CountdownTimerComponent.prototype.countDown = function () {
        var _this = this;
        this.clearTimer();
        this.intervalId = window.setInterval(function () {
            _this.seconds -= 1;
            if (_this.seconds === 0) {
                _this.message = '重头再来';
            }
            else {
                if (_this.seconds < 0) {
                    _this.seconds = 10;
                } // reset
                _this.message = _this.seconds + " \u79D2";
            }
        }, 1000);
    };
    CountdownTimerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'countdown-timer',
                    template: '<p>子组件提示状态：{{message}}</p>'
                },] },
    ];
    /** @nocollapse */
    CountdownTimerComponent.ctorParameters = [];
    return CountdownTimerComponent;
}());
//# sourceMappingURL=timer.component.js.map