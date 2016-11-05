import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';
import { ProtectedComponent } from './protected.component';
import { AUTH_PROVIDERS } from './auth.service';
import { LoggedInGuardService } from './loggedIn.guard';

const routes: Routes = [
  { path: 'auth', component: LoginComponent },
  { path: 'protected', component: ProtectedComponent, canActivate: [LoggedInGuardService] },  //守卫
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule { }

