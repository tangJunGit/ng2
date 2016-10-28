import { NgModule } from '@angular/core';

import { ReduxComponent }   from './redux.component';
import { reduxRouting } from './redux.routing';

@NgModule({
    imports: [
        reduxRouting
    ],
    exports: [],
    declarations: [
        ReduxComponent
    ],
    providers: [],
})
export class ReduxDemoModule { }
