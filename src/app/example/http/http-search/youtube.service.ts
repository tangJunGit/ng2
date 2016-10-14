import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx'; 

import { YOUTUBE_API_KEY, YOUTUBE_API_URL } from './youtube-api';
import { SearchResult } from './search-result';

@Injectable()
export class YoutubeService {

    constructor(
        private http: Http, 
        @Inject(YOUTUBE_API_KEY) private apiKey: string,
        @Inject(YOUTUBE_API_URL) private apiUrl: string
    ) { }
    /**
     * YOUTUBE搜索
     * 
     * @param {string} query
     * @returns {Observable<SearchResult[]>}
     * 
     * @memberOf YoutubeService
     */
    search(query: string): Observable<SearchResult[]>{
        let params: string = [
            `q=${query}`,
            `key=${this.apiKey}`,
            `part=snippet`,
            `type=video`,
            `maxResults=10`
        ].join('&');
        let queryUrl: string = `${this.apiUrl}?${params}`;

        return this.http.get(queryUrl)
            .map((res: Response) => {
                return res.json().items;
            });
    }
}