import { NgModule } from '@angular/core';

import { authRouting } from './auth.routing';
import { AuthComponent }   from './auth.component';

@NgModule({
    imports: [
        authRouting
    ],
    exports: [],
    declarations: [AuthComponent],
    providers: [],
})
export class AuthDemoModule { }
