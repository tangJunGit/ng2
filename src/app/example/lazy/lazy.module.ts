import { NgModule } from '@angular/core';

import { LazyComponent }   from './lazy.component';
import { LazyRoutingModule } from './lazy.routes';

@NgModule({
    imports: [
        LazyRoutingModule
    ],
    exports: [],
    declarations: [
        LazyComponent
    ],
    providers: [],
})
export class LazyDemoModule { }