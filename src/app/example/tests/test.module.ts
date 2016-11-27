import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TwainComponent } from './components/async/twain.component';
import { BannerComponent } from './components/basic/banner.component';
import { WelcomeComponent } from './components/depend/welcome.component';
import { DashboardHeroComponent } from './components/external/dashboard-hero.component';
import { DashboardComponent } from './components/external/dashboard.component';
import { TestHostComponent } from './components/host/dashboard.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [],
    declarations: [
        TwainComponent,
        BannerComponent,
        WelcomeComponent,
        DashboardHeroComponent,
        DashboardComponent,
        TestHostComponent
    ],
    providers: [],
})
export class RxjsDemoModule { }
