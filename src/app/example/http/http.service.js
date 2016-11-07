import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Headers, RequestOptions, Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';
export var HttpService = (function () {
    function HttpService(http, jsonp) {
        this.http = http;
        this.jsonp = jsonp;
        this.url = 'assets/mock/http-data.json';
    }
    HttpService.prototype.getDatePromise = function () {
        return this.http.get(this.url)
            .toPromise()
            .then(function (res) {
            var body = res.json();
            return body || {};
        })
            .catch(function (error) { return error; });
    };
    /** Observable*/
    //get
    HttpService.prototype.getDate = function () {
        var params = new URLSearchParams();
        params.set('search', 'search');
        params.set('format', 'json');
        return this.http.get(this.url, { search: params })
            .map(this.extractData)
            .catch(this.handleError);
    };
    //post
    HttpService.prototype.postDate = function (name) {
        var body = JSON.stringify({ name: name });
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var options = new RequestOptions({ headers: headers });
        return this.http.post(this.url, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    HttpService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    HttpService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        return Observable.throw(errMsg);
    };
    //Jsonp
    HttpService.prototype.search = function (term) {
        var wikiUrl = 'http://en.wikipedia.org/w/api.php';
        var params = new URLSearchParams();
        params.set('search', term);
        params.set('action', 'opensearch');
        params.set('format', 'json');
        params.set('callback', 'JSONP_CALLBACK');
        return this.jsonp
            .get(wikiUrl, { search: params })
            .map(function (response) { return response.json()[1]; });
    };
    HttpService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    HttpService.ctorParameters = [
        { type: Http, },
        { type: Jsonp, },
    ];
    return HttpService;
}());
//# sourceMappingURL=http.service.js.map