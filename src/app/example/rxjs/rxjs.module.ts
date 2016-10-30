import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { rxjsRouting } from './rxjs.routing';
import { UserComponent } from './user.component';
import { UserService } from './user.service';

@NgModule({
    imports: [
        CommonModule,
        rxjsRouting
    ],
    exports: [],
    declarations: [
        UserComponent
    ],
    providers: [
        UserService 
    ],
})
export class RxjsDemoModule { }
