import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, Headers, RequestOptions, Jsonp  } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class HttpService {
    url: string = 'mock/http-data.json';

    constructor(private http: Http, private jsonp: Jsonp) { }   

    getDatePromise () {
        return this.http.get(this.url)
                .toPromise()
                .then(
                    (res: Response) => {
                        let body = res.json();
                        return body || { };
                    })
                .catch(
                    (error: any) => error
                );
    }


/** Observable*/

    //get
    getDate(): Observable<any> {
        let params = new URLSearchParams();
        params.set('search', 'search'); 
        params.set('format', 'json');
        
        return this.http.get(this.url,  { search: params })
                        .map(this.extractData)
                        .catch(this.handleError);
    }

    //post
    postDate (name: string): Observable<any> {
        let body = JSON.stringify({ name });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
    
        return this.http.post(this.url, body, options)
                        .map(this.extractData)
                        .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || { };
    }
    private handleError (error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        return Observable.throw(errMsg);
    }

    //Jsonp
    search (term: string) {
        let wikiUrl = 'http://en.wikipedia.org/w/api.php';
        let params = new URLSearchParams();
        params.set('search', term); 
        params.set('action', 'opensearch');
        params.set('format', 'json');
        params.set('callback', 'JSONP_CALLBACK');

        return this.jsonp
                   .get(wikiUrl, { search: params })
                   .map(response => <string[]> response.json()[1]);
  }
}

