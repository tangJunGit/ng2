import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Config } from './stomp.model';

@Injectable()
export class ConfigService {
    url: string = 'assets/mock/stomp-config.json';

    constructor(private http: Http) { }

    getConfig(): Observable<Config>{
        return this.http.get(this.url)
                .map((res: Response) => {
                    return res.json();
                });
    }


}