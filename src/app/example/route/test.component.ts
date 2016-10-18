import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'route-test',
    template: `
        <p>地址参数 (params)： {{id}}</p>
        <p>地址参数 (queryParams)： {{query}}</p>
        <button class="btn" (click)="queryParams()">queryParams</button>
    `
})
export class RouteTestComponent implements OnInit {
    id: string;
    query: string;

    constructor(private router: Router, private route: ActivatedRoute) { 
        //params
        route.params.subscribe(
            params => {
                this.id = params['id'];
            }
        );
        //queryParams
        route.queryParams.subscribe(
            queryParams => {
                this.query = queryParams['query'];
            }
        );
        
    }

    ngOnInit() { }

    queryParams(): void{
        this.router.navigate(['route', this.id], {queryParams: {query: "query"}})   //  /route/1?query=query
            .then(_ => {
                alert("跳转前此处处理……");
            });
    }
}