import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TwainService {

    constructor(private http: Http) { }

    getQuote(): Promise<any>{
        return this.http.get('url')
                .toPromise() 
                .then((res: any) => res)
                .catch((error: any) => error);
    }
}