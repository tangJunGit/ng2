import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, Headers, RequestOptions  } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class HttpService {
    url: string = 'http://jsonplaceholder.typicode.com/posts/1';

    constructor(private http: Http) { }
    //get
    getDate(): Observable<any> {
        let params = new URLSearchParams();
        params.set('search', 'search'); 
        params.set('format', 'json');
        
        return this.http.get(this.url,  { search: params })
                        .map(this.extractData)
                        .catch(this.handleError);
    }

    getDatePromise (): Promise<any> {
        return this.http.get(this.url)
                      .toPromise()
                      .then(this.extractData)
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
        let body = res;
        // let body = res.json();
        return body || { };
    }
    private handleError (error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        return Observable.throw(errMsg);
    }
}

