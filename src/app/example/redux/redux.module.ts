import { NgModule } from '@angular/core';

import { ReduxComponent }   from './redux.component';
import { ReduxRoutingModule } from './redux.routes';

@NgModule({
    imports: [
        ReduxRoutingModule
    ],
    exports: [],
    declarations: [
        ReduxComponent
    ],
    providers: [],
})
export class ReduxDemoModule { }
