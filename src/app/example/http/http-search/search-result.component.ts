import { Component, OnInit } from '@angular/core';

import { SearchResult } from './search-result';

@Component({
    inputs: ['result'],
    selector: 'search-result',
    template: `
        <div class="col-sm-6 col-md-3">
            <div class="thumbnail">
                <img src="{{result.snippet.thumbnails.medium.url}}">
                <div class="caption">
                    <h3>{{result.snippet.title}}</h3>
                    <p>{{result.snippet.description}}</p>
                    <p>
                        <a href="https://www.youtube.com/watch?v={{result.id.videoId}}" target="_blank" class="btn btn-default" role="button">Watch</a>
                    </p>
                </div>
            </div>
        </div>
    `
})
export class SearchResultComponent implements OnInit {
    result: SearchResult;

    constructor() { }

    ngOnInit() { }
}