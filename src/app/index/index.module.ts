import { NgModule } from '@angular/core';

import { indexRouting } from './index.routing';
import { IndexComponent }   from './index.component';

@NgModule({
    imports: [indexRouting],
    declarations: [IndexComponent],
    providers: [],
})
export class IndexModule { }
