import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StompComponent } from './stomp-demo.component';

const routes: Routes = [
  { path: 'stomp', component: StompComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StompRoutingModule { }

