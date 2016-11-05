import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DepInjectionComponent } from './dep-injection.component';

const routes: Routes = [
  { path: 'dep-injection', component: DepInjectionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepInjectionRoutingModule { }

