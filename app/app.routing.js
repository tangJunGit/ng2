"use strict";
var router_1 = require('@angular/router');
var display_component_1 = require('./display/display.component');
var routes = [
    { path: '', redirectTo: '/display', pathMatch: 'full' },
    { path: '**', component: display_component_1.DisplayComponent }
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routing.js.map