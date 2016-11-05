import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteRoutingModule } from './route.routes';
import { RouteDemoComponent } from './route.component';
import { RouteTestComponent } from './test.component';
import { WelcomeComponent } from './welcome.component';
import { PreLoadService } from './pre-load.service';

@NgModule({
    imports: [
        CommonModule, 
        RouteRoutingModule
    ],
    exports: [],
    declarations: [
        RouteDemoComponent,
        RouteTestComponent,
        WelcomeComponent
    ],
    providers: [
        PreLoadService 
    ],
})
export class RouteDemoModule { }
