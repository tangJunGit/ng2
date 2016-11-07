import { Component } from '@angular/core';
export var YoutubeSearchDemoComponent = (function () {
    function YoutubeSearchDemoComponent() {
        this.loadingUrl = require('./loading.jpg');
    }
    YoutubeSearchDemoComponent.prototype.ngOnInit = function () { };
    YoutubeSearchDemoComponent.prototype.updateResults = function (results) {
        this.results = results;
    };
    YoutubeSearchDemoComponent.decorators = [
        { type: Component, args: [{
                    selector: 'youtube-search',
                    template: "\n        <div class='container'>\n            <div class=\"page-header\">\n                <h1>YouTube Search\n                    <img style=\"width: 50px;\" *ngIf=\"loading\" src='loadingUrl' />\n                </h1>\n            </div>\n        \n            <div class=\"row\">\n                <div class=\"input-group input-group-lg col-md-12\">\n                    <search-box (loading)=\"loading = $event\" (results)=\"updateResults($event)\" ></search-box>\n                </div>\n            </div>\n        \n            <div class=\"row\">\n                <search-result *ngFor=\"let result of results\" [result]=\"result\"> </search-result>\n            </div>\n        </div>\n    "
                },] },
    ];
    /** @nocollapse */
    YoutubeSearchDemoComponent.ctorParameters = [];
    return YoutubeSearchDemoComponent;
}());
//# sourceMappingURL=youtube-search.component.js.map