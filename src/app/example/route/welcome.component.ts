import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'my-welcome',
    template: `
        <h2>Welcome!</h2>
        <p>预加载</p>
        <pre>{{data | json}}</pre>
    `
})
export class WelcomeComponent implements OnInit {
    data: any;
    constructor(private route: ActivatedRoute) { }

    ngOnInit() { 
        //获取预加载数据
        this.route.data.subscribe((data: { data: any }) => {
            this.data = data;
      });
    }
}