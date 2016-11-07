import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
export var RouteTestComponent = (function () {
    function RouteTestComponent(router, route) {
        var _this = this;
        this.router = router;
        this.route = route;
        var id = +this.route.snapshot.params['id']; //快照（ snapshot ）
        //params
        route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.id2 = params['id2'];
            _this.title = params['title'];
        });
        //queryParams
        route.queryParams.subscribe(function (queryParams) {
            _this.query = queryParams['query'];
        });
        this.id2 = '3';
    }
    RouteTestComponent.prototype.ngOnInit = function () { };
    RouteTestComponent.prototype.queryParams = function () {
        // 绝对路径
        // this.router.navigate(['route', this.id], {queryParams: {query: "query"}})   //  /route/1?query=query
        //     .then(_ => {
        //         alert("跳转前此处处理……");
        //     });
        //相对路径  ../ 指子路由上一级   ./ 指当前
        this.router.navigate(['../', this.id2, { title: this.title, title2: this.title }], { relativeTo: this.route, queryParams: { query: "query", search: 'search' } }) //  /route/1?query=query
            .then(function (_) {
            alert("跳转前此处处理……");
        });
    };
    RouteTestComponent.decorators = [
        { type: Component, args: [{
                    selector: 'route-test',
                    template: "\n        <h2>Test!</h2>\n        <p>\u5730\u5740\u53C2\u6570 (params)\uFF1A {{id}} / {{id2}} / {{title}}</p>\n        <p>\u5730\u5740\u53C2\u6570 (queryParams)\uFF1A {{query}}</p>\n        <button class=\"btn\" (click)=\"queryParams()\">\u663E\u793AqueryParams\u53C2\u6570</button>\n    "
                },] },
    ];
    /** @nocollapse */
    RouteTestComponent.ctorParameters = [
        { type: Router, },
        { type: ActivatedRoute, },
    ];
    return RouteTestComponent;
}());
//# sourceMappingURL=test.component.js.map