import { Injectable, Inject } from '@angular/core';
export var API_URL = 'API_URL';
export var ApiService = (function () {
    function ApiService(apiUrl) {
        this.apiUrl = apiUrl;
    }
    ApiService.prototype.get = function () {
        console.log("Calling " + this.apiUrl);
    };
    ApiService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ApiService.ctorParameters = [
        { type: undefined, decorators: [{ type: Inject, args: [API_URL,] },] },
    ];
    return ApiService;
}());
//# sourceMappingURL=api.service.js.map