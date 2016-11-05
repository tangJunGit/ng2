import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsRoutingModule } from './rxjs.routes';
import { UserComponent } from './user.component';
import { UserService } from './user.service';

@NgModule({
    imports: [
        CommonModule,
        RxjsRoutingModule
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
