import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TwainComponent } from './components/async/twain.component';
import { BannerComponent } from './components/basic/banner.component';
import { WelcomeComponent } from './components/depend/welcome.component';
import { DashboardHeroComponent } from './components/external/dashboard-hero.component';
import { TestHostComponent } from './components/host/dashboard.component';
import { DashboardComponent } from './components/router/dashboard.component';
import { HeroDetailComponent } from './components/router/hero-detail.component';
import { AboutComponent } from './directives/about.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [],
    declarations: [
        TwainComponent,
        BannerComponent,
        WelcomeComponent,
        DashboardHeroComponent,
        DashboardComponent,
        TestHostComponent,
        AboutComponent
    ],
    providers: [],
})
export class RxjsDemoModule { }
