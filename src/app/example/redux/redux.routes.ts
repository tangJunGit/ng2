import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReduxComponent } from './redux.component';

const routes: Routes = [
  { path: 'redux', component: ReduxComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReduxRoutingModule { }

