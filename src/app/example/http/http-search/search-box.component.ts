import { Component, OnInit, EventEmitter, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/RX'; 

import { YoutubeService } from './youtube.service';
import { SearchResult } from './search-result';
import { SearchResultComponent } from './search-result.component';

@Component({
    selector: 'search-box',
    outputs: ['loading', 'results'],
    template: `
        <input type="text" class="form-control" placeholder="Search" autofocus>
    `
})
export class SearchBoxComponent implements OnInit {
    loading: EventEmitter<boolean> = new EventEmitter<boolean>();
    results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();

    constructor(
        private youtubeService: YoutubeService,
        private el: ElementRef
    ) { }

    ngOnInit() { 
        //将keyup事件放入Observable stream
        Observable.fromEvent(this.el.nativeElement, 'keyup')
        .map((e: any) => e.target.value)      //获取input的值
        .filter((text: string) => text.length > 0)   //过滤input值为空的情况
        .debounceTime(250)
        .do(() => this.loading.next(true))       
        .map((query: string) => this.youtubeService.search(query))
        .switch()
        .subscribe(              
            (results: SearchResult[]) => {    //on sucesss
                this.loading.next(false);
                this.results.next(results);
            },
            (err: any) => {       // on error
                console.log(err);
                this.loading.next(false);
            },
            () => {          // on completion
                this.loading.next(false);
            }
        )
    }
}