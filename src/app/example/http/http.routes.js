import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpDemoComponent } from './http.component';
import { YoutubeSearchDemoComponent } from './http-search/youtube-search.component';
var routes = [
    { path: 'http', component: HttpDemoComponent },
    { path: 'http-search', component: YoutubeSearchDemoComponent }
];
export var HttpRoutingModule = (function () {
    function HttpRoutingModule() {
    }
    HttpRoutingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule],
                },] },
    ];
    /** @nocollapse */
    HttpRoutingModule.ctorParameters = [];
    return HttpRoutingModule;
}());
//# sourceMappingURL=http.routes.js.map