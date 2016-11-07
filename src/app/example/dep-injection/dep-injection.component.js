import { Component, Inject, ReflectiveInjector } from '@angular/core';
import { ApiService, API_URL } from './api.service';
import { ViewportService } from './viewport.service';
export var DepInjectionComponent = (function () {
    function DepInjectionComponent(apiService, aliasService) {
        this.apiService = apiService;
        this.aliasService = aliasService;
    }
    DepInjectionComponent.prototype.ngOnInit = function () {
        this.invokeApi();
    };
    //调用
    DepInjectionComponent.prototype.invokeApi = function () {
        this.aliasService.get();
        //this.sizeService.run();
    };
    DepInjectionComponent.prototype.invokeApiService = function () {
        this.apiService.get();
    };
    //使用 Injectors
    DepInjectionComponent.prototype.useInjectors = function () {
        var injector = ReflectiveInjector.resolveAndCreate([
            ViewportService,
            {
                provide: 'OtherSizeService',
                useFactory: function (viewport) {
                    return viewport.determineService();
                },
                deps: [ViewportService]
            }
        ]);
        var sizeService = injector.get('OtherSizeService');
        sizeService.run();
    };
    DepInjectionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dep-injection',
                    template: "\n        <h1>\u4F9D\u8D56\u6CE8\u5165</h1>\n        <p>demo\u8BF7\u770Bconsole.log\u6253\u5370</p>\n        <button class=\"btn\" (click)=\"useInjectors()\">\u6253\u5370Injectors</button>\n        <button class=\"btn\" (click)=\"invokeApiService()\">\u8C03\u7528 API</button>\n    ",
                    providers: [
                        ApiService,
                        ViewportService,
                        { provide: 'ApiServiceAlias', useExisting: ApiService },
                        // aot 编译错误
                        // {
                        //     provide: 'SizeService',
                        //     useFactory: (viewport: any) => {   // 方法接收 ViewportService 对象
                        //         return viewport.determineService();
                        //     },
                        //     deps: [ViewportService]
                        // },
                        {
                            provide: API_URL,
                            useValue: 'https://production-api.sample.com'
                        }
                    ]
                },] },
    ];
    /** @nocollapse */
    DepInjectionComponent.ctorParameters = [
        { type: ApiService, },
        { type: ApiService, decorators: [{ type: Inject, args: ['ApiServiceAlias',] },] },
    ];
    return DepInjectionComponent;
}());
//# sourceMappingURL=dep-injection.component.js.map