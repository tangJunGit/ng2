import { NgModule } from '@angular/core';

import { routeRouting } from './route.routing';
import { RouteDemoComponent } from './route.component';
import { RouteTestComponent } from './test.component';
import { WelcomeComponent } from './welcome.component';

@NgModule({
    imports: [
        routeRouting
    ],
    exports: [],
    declarations: [
        RouteDemoComponent,
        RouteTestComponent,
        WelcomeComponent
    ],
    providers: [],
})
export class RouteDemoModule { }
