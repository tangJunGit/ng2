import { Component, OnInit } from '@angular/core';

import { SearchResult } from './search-result';

@Component({
    selector: 'youtube-search',
    template: `
        <div class='container'>
            <div class="page-header">
                <h1>YouTube Search
                    <img style="width: 50px;" *ngIf="loading" [src]="loadingUrl" />
                </h1>
            </div>
        
            <div class="row">
                <div class="input-group input-group-lg col-md-12">
                    <search-box (loading)="loading = $event" (results)="updateResults($event)" ></search-box>
                </div>
            </div>
        
            <div class="row">
                <search-result *ngFor="let result of results" [result]="result"> </search-result>
            </div>
        </div>
    `
}) 
export class YoutubeSearchDemoComponent implements OnInit {
    loading: any;
    loadingUrl: string = require('./loading.jpg');
    results: SearchResult[];

    constructor() { }

    ngOnInit() { }

    updateResults(results: SearchResult[]): void{
        this.results = results;
    }
}