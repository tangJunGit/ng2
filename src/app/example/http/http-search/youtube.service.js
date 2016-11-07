import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { YOUTUBE_API_KEY, YOUTUBE_API_URL } from './youtube-api';
export var YoutubeService = (function () {
    function YoutubeService(http, apiKey, apiUrl) {
        this.http = http;
        this.apiKey = apiKey;
        this.apiUrl = apiUrl;
    }
    /**
     * YOUTUBE搜索
     *
     * @param {string} query
     * @returns {Observable<SearchResult[]>}
     *
     * @memberOf YoutubeService
     */
    YoutubeService.prototype.search = function (query) {
        var params = [
            ("q=" + query),
            ("key=" + this.apiKey),
            "part=snippet",
            "type=video",
            "maxResults=10"
        ].join('&');
        var queryUrl = this.apiUrl + "?" + params;
        return this.http.get(queryUrl)
            .map(function (res) {
            return res.json().items;
        });
    };
    YoutubeService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    YoutubeService.ctorParameters = [
        { type: Http, },
        { type: undefined, decorators: [{ type: Inject, args: [YOUTUBE_API_KEY,] },] },
        { type: undefined, decorators: [{ type: Inject, args: [YOUTUBE_API_URL,] },] },
    ];
    return YoutubeService;
}());
//# sourceMappingURL=youtube.service.js.map