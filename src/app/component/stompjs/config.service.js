import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
export var ConfigService = (function () {
    function ConfigService(http) {
        this.http = http;
        this.url = 'assets/mock/stomp-config.json';
    }
    ConfigService.prototype.getConfig = function () {
        return this.http.get(this.url)
            .map(function (res) {
            return res.json();
        });
    };
    ConfigService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ConfigService.ctorParameters = [
        { type: Http, },
    ];
    return ConfigService;
}());
//# sourceMappingURL=config.service.js.map