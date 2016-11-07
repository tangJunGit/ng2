import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { HttpService } from './http.service';
export var HttpDemoComponent = (function () {
    function HttpDemoComponent(http, httpService) {
        this.http = http;
        this.httpService = httpService;
    }
    HttpDemoComponent.prototype.ngOnInit = function () { };
    HttpDemoComponent.prototype.makeRequest = function () {
        var _this = this;
        this.loading = true;
        this.httpService.getDate()
            .subscribe(function (res) {
            _this.data = res;
            _this.loading = false;
        }, function (error) { return console.log(error); });
    };
    HttpDemoComponent.prototype.makeJsonp = function () {
        this.data = this.httpService.search('ng2');
    };
    HttpDemoComponent.decorators = [
        { type: Component, args: [{
                    selector: 'my-http',
                    template: "\n        <div class=\"col-md-6\">\n            <h2>Basic Request</h2>\n            <button type=\"button\" class=\"btn\" (click)=\"makeRequest()\">\u8BF7\u6C42\u6570\u636E</button>\n            <button type=\"button\" class=\"btn\" (click)=\"makeJsonp()\">Jsonp\u6570\u636E</button>\n            <div *ngIf=\"loading\">loading...</div>\n            <pre>{{data | json}}</pre>\n        </div>\n    "
                },] },
    ];
    /** @nocollapse */
    HttpDemoComponent.ctorParameters = [
        { type: Http, },
        { type: HttpService, },
    ];
    return HttpDemoComponent;
}());
//# sourceMappingURL=http.component.js.map