import { NgModule } from '@angular/core';

import { BannerComponent }   from './basic/banner.component';     //component简单的测试
import { WelcomeComponent }   from './depend/welcome.component';     //component依赖的测试

@NgModule({
    imports: [],
    exports: [],
    declarations: [
        BannerComponent,
        WelcomeComponent
    ],
    providers: [],
})
export class TestModule { }
