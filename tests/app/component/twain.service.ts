import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TwainService {
    constructor(private http: Http) { }

    getQuote(): Promise<any>{
        return this.http.get('this.url')
                .toPromise()
                .then((res: Response) => res)
                .catch((error: any) => error);
    }
}