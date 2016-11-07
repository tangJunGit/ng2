import { Injectable } from '@angular/core';
export var LargeService = (function () {
    function LargeService() {
    }
    LargeService.prototype.run = function () {
        console.log('getting LargeService');
    };
    LargeService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    LargeService.ctorParameters = [];
    return LargeService;
}());
//# sourceMappingURL=large.service.js.map