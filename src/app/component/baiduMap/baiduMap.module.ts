import { NgModule } from '@angular/core';

import { BaiduMapDemoComponent } from './baiduMap-demo.component';
import { BaiduMapRoutingModule } from './baiduMap.routes';
import { BaiduMaptService } from './baiduMap.service'
import { LoadScriptService } from './loadScript.service'

@NgModule({
    imports: [
        BaiduMapRoutingModule
    ],
    exports: [],
    declarations: [
        BaiduMapDemoComponent
    ],
    providers: [
        BaiduMaptService,
        LoadScriptService
    ],
})
export class BaiduMapDemoModule { }
