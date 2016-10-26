import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Config } from './stomp.model';

@Injectable()
export class ConfigService {
    private static API_URL: string = 'src/app/component/stompjs/config.json';

    constructor(private http: Http) { }

    getConfig(): Promise<Config>{
        return this.http.get(ConfigService.API_URL)
            .toPromise()
            .then(res => res.json());
    }
}