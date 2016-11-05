import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonpModule } from '@angular/http'; 

import { HttpRoutingModule } from './http.routes';
import { HttpDemoComponent }   from './http.component';
import { HttpService } from './http.service';

import { YoutubeSearchDemoComponent } from './http-search/youtube-search.component';
import { SearchBoxComponent } from './http-search/search-box.component';
import { SearchResultComponent } from './http-search/search-result.component';
import { YoutubeService } from './http-search/youtube.service';
import { YOUTUBE_API_KEY, YOUTUBE_API_URL } from './http-search/youtube-api';  

@NgModule({
    imports: [ 
        JsonpModule,
        HttpRoutingModule, 
        CommonModule
    ],
    exports: [],
    declarations: [ 
        HttpDemoComponent,
        YoutubeSearchDemoComponent, 
        SearchBoxComponent,
        SearchResultComponent
    ],
    providers: [
        HttpService, 
        YoutubeService,
        {provide: YOUTUBE_API_KEY, useValue: YOUTUBE_API_KEY},
        {provide: YOUTUBE_API_URL, useValue: YOUTUBE_API_URL}
    ],
})
export class HttpDemoModule { }
