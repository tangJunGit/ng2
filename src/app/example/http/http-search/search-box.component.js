import { Component, EventEmitter, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/RX';
import { YoutubeService } from './youtube.service';
export var SearchBoxComponent = (function () {
    function SearchBoxComponent(youtubeService, el) {
        this.youtubeService = youtubeService;
        this.el = el;
        this.loading = new EventEmitter();
        this.results = new EventEmitter();
    }
    SearchBoxComponent.prototype.ngOnInit = function () {
        var _this = this;
        //将keyup事件放入Observable stream
        Observable.fromEvent(this.el.nativeElement, 'keyup')
            .map(function (e) { return e.target.value; }) //获取input的值
            .filter(function (text) { return text.length > 0; }) //过滤input值为空的情况
            .debounceTime(250)
            .do(function () { return _this.loading.next(true); })
            .map(function (query) { return _this.youtubeService.search(query); })
            .switch()
            .subscribe(function (results) {
            _this.loading.next(false);
            _this.results.next(results);
        }, function (err) {
            console.log(err);
            _this.loading.next(false);
        }, function () {
            _this.loading.next(false);
        });
    };
    SearchBoxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'search-box',
                    outputs: ['loading', 'results'],
                    template: "\n        <input type=\"text\" class=\"form-control\" placeholder=\"Search\" autofocus>\n    "
                },] },
    ];
    /** @nocollapse */
    SearchBoxComponent.ctorParameters = [
        { type: YoutubeService, },
        { type: ElementRef, },
    ];
    return SearchBoxComponent;
}());
//# sourceMappingURL=search-box.component.js.map