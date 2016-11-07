import { Component } from '@angular/core';
export var SearchResultComponent = (function () {
    function SearchResultComponent() {
    }
    SearchResultComponent.prototype.ngOnInit = function () { };
    SearchResultComponent.decorators = [
        { type: Component, args: [{
                    inputs: ['result'],
                    selector: 'search-result',
                    template: "\n        <div class=\"col-sm-6 col-md-3\">\n            <div class=\"thumbnail\">\n                <img src=\"{{result.snippet.thumbnails.medium.url}}\">\n                <div class=\"caption\">\n                    <h3>{{result.snippet.title}}</h3>\n                    <p>{{result.snippet.description}}</p>\n                    <p>\n                        <a href=\"https://www.youtube.com/watch?v={{result.id.videoId}}\" target=\"_blank\" class=\"btn btn-default\" role=\"button\">Watch</a>\n                    </p>\n                </div>\n            </div>\n        </div>\n    "
                },] },
    ];
    /** @nocollapse */
    SearchResultComponent.ctorParameters = [];
    return SearchResultComponent;
}());
//# sourceMappingURL=search-result.component.js.map