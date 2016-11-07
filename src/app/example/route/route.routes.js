import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouteDemoComponent } from './route.component';
import { RouteTestComponent } from './test.component';
import { WelcomeComponent } from './welcome.component';
import { PreLoadService } from './pre-load.service';
var routes = [
    { path: 'route', component: RouteDemoComponent,
        children: //子路由
        [
            { path: '', component: WelcomeComponent,
                resolve: {
                    date: PreLoadService //预加载 
                }
            },
            { path: ':id/:id2', component: RouteTestComponent },
        ],
    },
];
export var RouteRoutingModule = (function () {
    function RouteRoutingModule() {
    }
    RouteRoutingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule],
                },] },
    ];
    /** @nocollapse */
    RouteRoutingModule.ctorParameters = [];
    return RouteRoutingModule;
}());
//# sourceMappingURL=route.routes.js.map