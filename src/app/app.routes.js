import { RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
var routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: '**', component: IndexComponent },
    // 懒加载
    {
        path: "lazy",
        loadChildren: "./example/lazy/lazy.module#LazyDemoModule"
    }
];
export var AppRoutingModule = RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map