import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoadchildrenDemoComponent, SubComponent }   from './loadchildren.component';

const routes: Routes = [
  {
    path: "",
    component: LoadchildrenDemoComponent,
    children: [
      { path: "", component: SubComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoadchildrenRoutingModule { }


