import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
export var ServiceCommonService = (function () {
    function ServiceCommonService() {
        // Observable string sources
        this.missionAnnouncedSource = new Subject();
        this.missionConfirmedSource = new Subject();
        // Observable string streams
        this.missionAnnounced$ = this.missionAnnouncedSource.asObservable();
        this.missionConfirmed$ = this.missionConfirmedSource.asObservable();
    }
    // Service message commands
    ServiceCommonService.prototype.announceMission = function (mission) {
        this.missionAnnouncedSource.next(mission);
    };
    ServiceCommonService.prototype.confirmMission = function (astronaut) {
        this.missionConfirmedSource.next(astronaut);
    };
    ServiceCommonService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ServiceCommonService.ctorParameters = [];
    return ServiceCommonService;
}());
//# sourceMappingURL=service-comm.service.js.map