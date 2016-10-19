import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

import { HttpService } from './http.service';

@Component({
    selector: 'my-http',
    template: `
        <div class="col-md-6">
            <h2>Basic Request</h2>
            <button type="button" class="btn" (click)="makeRequest()">请求数据</button>
            <button type="button" class="btn" (click)="makeJsonp()">Jsonp数据</button>
            <div *ngIf="loading">loading...</div>
            <pre>{{data | json}}</pre>
        </div>
    `
})
export class HttpDemoComponent implements OnInit {
    data: Object;
    loading: Boolean;

    constructor(private http: Http, private httpService: HttpService) { }

    ngOnInit() {  }
    makeRequest(): void{
        this.loading = true;

        this.httpService.getDate()
            .subscribe(
                 (res: Response) => {
                    this.data = res;
                    this.loading = false;
                },
                (error: any) => console.log(error)
            );


    }

    makeJsonp(): void{
        this.data = this.httpService.search('ng2');
    }


    
}