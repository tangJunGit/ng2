import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HttpDemoComponent } from './http.component'; 
import { YoutubeSearchDemoComponent } from './http-search/youtube-search.component';

const routes: Routes = [
  { path: 'http', component: HttpDemoComponent },
  { path: 'http-search', component: YoutubeSearchDemoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HttpRoutingModule { }

