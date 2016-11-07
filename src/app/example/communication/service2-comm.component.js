import { Component, Input } from '@angular/core';
import { ServiceCommonService } from './service-comm.service';
export var Service2CommonComponent = (function () {
    function Service2CommonComponent(serviceCommonService) {
        var _this = this;
        this.serviceCommonService = serviceCommonService;
        this.mission = '<没有任务宣布>';
        this.confirmed = false;
        this.announced = false;
        this.subscription = serviceCommonService.missionAnnounced$.subscribe(function (mission) {
            _this.mission = mission;
            _this.announced = true;
            _this.confirmed = false;
        });
    }
    Service2CommonComponent.prototype.ngOnInit = function () { };
    Service2CommonComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    Service2CommonComponent.prototype.confirm = function () {
        this.confirmed = true;
        this.serviceCommonService.confirmMission(this.astronaut);
    };
    Service2CommonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'service2-common',
                    template: "\n        <p>\n          {{astronaut}}: <strong>{{mission}}</strong>\n          <button (click)=\"confirm()\" [disabled]=\"!announced || confirmed\"> \u786E\u8BA4 </button>\n        </p>\n    "
                },] },
    ];
    /** @nocollapse */
    Service2CommonComponent.ctorParameters = [
        { type: ServiceCommonService, },
    ];
    Service2CommonComponent.propDecorators = {
        'astronaut': [{ type: Input },],
    };
    return Service2CommonComponent;
}());
//# sourceMappingURL=service2-comm.component.js.map