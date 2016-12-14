import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Config } from './stomp.model';

@Injectable()
export class ConfigService {
    url: string = 'assets/mock/stomp-config.json';

    constructor(private _http: Http) { }

    getConfig(): Observable<Config>{
        return this._http.get(this.url)
                .map((res: Response) => {
                    return res.json();
                });
    }


}