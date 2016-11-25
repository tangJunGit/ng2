import { NgModule } from '@angular/core';

import { BannerComponent }   from './components/basic/banner.component';     //component简单的测试
import { WelcomeComponent }   from './components/depend/welcome.component';     //component依赖的测试
import { TwainComponent }   from './components/async/twain.component';     //component异步的测试

@NgModule({
    imports: [],
    exports: [],
    declarations: [
        BannerComponent,
        WelcomeComponent,
        TwainComponent
    ],
    providers: [],
})
export class TestModule { }
