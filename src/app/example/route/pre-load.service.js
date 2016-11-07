import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http/http.service';
export var PreLoadService = (function () {
    function PreLoadService(httpService, router) {
        this.httpService = httpService;
        this.router = router;
    }
    PreLoadService.prototype.resolve = function (route) {
        var _this = this;
        return this.httpService.getDatePromise().then(function (data) {
            if (data) {
                return data;
            }
            else {
                _this.router.navigate(['/route']);
                return false;
            }
        });
    };
    PreLoadService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    PreLoadService.ctorParameters = [
        { type: HttpService, },
        { type: Router, },
    ];
    return PreLoadService;
}());
//# sourceMappingURL=pre-load.service.js.map