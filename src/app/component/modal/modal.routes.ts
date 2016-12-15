import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalDemoComponent } from './modal-demo.component';

const routes: Routes = [
  { path: 'modal', component: ModalDemoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalDemoRoutingModule { }

export const routedComponents = [ModalDemoComponent];