import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CollapseDemoComponent } from './collapse-demo.component';

const routes: Routes = [
  { path: 'collapse', component: CollapseDemoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollapseRoutingModule { }

export const routedComponents = [CollapseDemoComponent];