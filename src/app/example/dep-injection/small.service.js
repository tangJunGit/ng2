import { Injectable } from '@angular/core';
export var SmallService = (function () {
    function SmallService() {
    }
    SmallService.prototype.run = function () {
        console.log('getting SmallService');
    };
    SmallService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    SmallService.ctorParameters = [];
    return SmallService;
}());
//# sourceMappingURL=small.service.js.map