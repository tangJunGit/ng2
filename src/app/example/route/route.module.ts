import { NgModule } from '@angular/core';

import { routeRouting } from './route.routing';
import { RouteDemoComponent } from './route.component';
import { RouteTestComponent } from './test.component';

@NgModule({
    imports: [
        routeRouting
    ],
    exports: [],
    declarations: [
        RouteDemoComponent,
        RouteTestComponent
    ],
    providers: [],
})
export class RouteDemoModule { }
