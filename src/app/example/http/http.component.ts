import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

import { HttpService } from './http.service';

@Component({
    selector: 'my-http',
    template: `
        <div class="col-md-6">
            <h2>Basic Request</h2>
            <button type="button" class="btn" (click)="makeRequest()">Make Request</button>
            <div *ngIf="loading">loading...</div>
            <pre>{{data | json}}</pre>
        </div>
    `
})
export class HttpDemoComponent implements OnInit {
    data: Object;
    loading: Boolean;

    constructor(private http: Http, private httpService: HttpService) { }

    ngOnInit() { }

    makeRequest(): void{
        this.loading = true;
        // this.http.request('http://jsonplaceholder.typicode.com/posts/1')
        //     .subscribe(
        //         (res: Response) => {
        //             this.data = res.json();
        //             this.loading = false;
        //         }
        //     );

        this.httpService.getDate()
            .subscribe(
                 (res: Response) => {
                    this.data = res.json();
                    this.loading = false;
                },
                (error: any) => console.log(error)
            );


    }
}