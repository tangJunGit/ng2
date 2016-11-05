import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabDemoComponent } from './tab-demo.component';

const routes: Routes = [
  { path: 'tab', component: TabDemoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabRoutingModule { }
