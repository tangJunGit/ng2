import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth.routes';
import { LoginComponent } from './login.component';
import { ProtectedComponent } from './protected.component';
import { AuthService } from './auth.service';
import { LoggedInGuardService } from './loggedIn.guard'; 

@NgModule({
    imports: [
        CommonModule,
        AuthRoutingModule 
    ],
    exports: [],
    declarations: [
        LoginComponent,
        ProtectedComponent
    ],
    providers: [ 
        AuthService,
        LoggedInGuardService
    ],
})
export class AuthDemoModule { }
