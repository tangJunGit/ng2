import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaiduMapDemoComponent } from './baiduMap-demo.component';

const routes: Routes = [
  { path: 'baiduMap', component: BaiduMapDemoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaiduMapRoutingModule { }

export const routedComponents = [BaiduMapDemoComponent];