import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'route-test',
    template: `
        <h2>Test!</h2>
        <p>地址参数 (params)： {{id}} / {{id2}} / {{title}}</p>
        <p>地址参数 (queryParams)： {{query}}</p>
        <button class="btn" (click)="queryParams()">显示queryParams参数</button>
    `
})
export class RouteTestComponent implements OnInit {
    id: string;
    id2: string;
    title: string;
    query: string;

    constructor(private router: Router, private route: ActivatedRoute) { 
        let id = +this.route.snapshot.params['id']; //快照（ snapshot ）

        //params
        route.params.subscribe(
            params => {
                this.id = params['id'];
                this.id2 = params['id2'];
                this.title = params['title'];
            }
        );
        //queryParams
        route.queryParams.subscribe(
            queryParams => {
                this.query = queryParams['query'];
            }
        );

        this.id2 = '3';
        
    }

    ngOnInit() { }

    queryParams(): void{
        // 绝对路径
        // this.router.navigate(['route', this.id], {queryParams: {query: "query"}})   //  /route/1?query=query
        //     .then(_ => {
        //         alert("跳转前此处处理……");
        //     });


        //相对路径  ../ 指子路由上一级   ./ 指当前
           this.router.navigate(['../', this.id2, {title: this.title, title2: this.title}], {relativeTo: this.route, queryParams: {query: "query",search:'search'}})   //  /route/1?query=query
            .then(_ => {
                alert("跳转前此处处理……");
            });
    }
}