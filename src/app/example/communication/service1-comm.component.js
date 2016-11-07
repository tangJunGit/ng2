import { Component } from '@angular/core';
import { ServiceCommonService } from './service-comm.service';
export var Service1CommonComponent = (function () {
    function Service1CommonComponent(serviceCommonService) {
        var _this = this;
        this.serviceCommonService = serviceCommonService;
        this.astronauts = ['杨利伟', '景海鹏', '陈冬'];
        this.history = [];
        this.missions = ['飞向月球!', '飞向火星!'];
        this.nextMission = 0;
        serviceCommonService.missionConfirmed$.subscribe(function (astronaut) {
            _this.history.push(astronaut + " \u5DF2\u786E\u8BA4\u4EFB\u52A1");
        });
    }
    Service1CommonComponent.prototype.ngOnInit = function () { };
    Service1CommonComponent.prototype.announce = function () {
        var mission = this.missions[this.nextMission++];
        this.serviceCommonService.announceMission(mission);
        this.history.push("\u4EFB\u52A1 \"" + mission + "\" \u5DF2\u5BA3\u5E03");
        if (this.nextMission >= this.missions.length) {
            this.nextMission = 0;
        }
    };
    Service1CommonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'service1-common',
                    template: "\n        <button (click)=\"announce()\">\u5BA3\u5E03\u4EFB\u52A1</button>\n        <service2-common *ngFor=\"let astronaut of astronauts\" [astronaut]=\"astronaut\"></service2-common>\n        <h3>\u5386\u53F2\u8BB0\u5F55</h3>\n        <ul>\n          <li *ngFor=\"let event of history\">{{event}}</li>\n        </ul>\n    "
                },] },
    ];
    /** @nocollapse */
    Service1CommonComponent.ctorParameters = [
        { type: ServiceCommonService, },
    ];
    return Service1CommonComponent;
}());
//# sourceMappingURL=service1-comm.component.js.map