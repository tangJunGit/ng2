import { Component, OnInit, Inject, ReflectiveInjector } from '@angular/core';

import { ApiService, API_URL } from './api.service';
import { ViewportService } from './viewport.service';

@Component({
    selector: 'dep-injection',
    template: `
        <h1>依赖注入</h1>
        <p>demo请看console.log打印</p>
        <button class="btn" (click)="useInjectors()">打印Injectors</button>
        <button class="btn" (click)="invokeApiService()">调用 API</button>
    `,
    providers: [
        ApiService,
        ViewportService,
        { provide: 'ApiServiceAlias', useExisting: ApiService },    // 声明 ApiServiceAlias 令牌
        {
            provide: 'SizeService',
            useFactory: (viewport: any) => {   // 方法接收 ViewportService 对象
                return viewport.determineService();
            },
            deps: [ViewportService]
        },
        {
            provide: API_URL, 
            useValue: 'https://production-api.sample.com'
        }
    ]
})
export class DepInjectionComponent implements OnInit {

    constructor(private apiService: ApiService,
                @Inject('ApiServiceAlias') private aliasService: ApiService,     
                @Inject('SizeService') private sizeService: any) { }

    ngOnInit() { 
        this.invokeApi();
    }

    //调用
    invokeApi(): void{
        this.aliasService.get();
        this.sizeService.run();
    }
    invokeApiService(): void{
        this.apiService.get();
    }

    //使用 Injectors
    useInjectors(): void{
        let injector: any = ReflectiveInjector.resolveAndCreate([
            ViewportService,
            {
                provide: 'OtherSizeService',
                useFactory: (viewport: any) => {   
                    return viewport.determineService();
                },
                deps: [ViewportService]
            }
        ]);

        let sizeService: any = injector.get('OtherSizeService');
        sizeService.run();
    }

}