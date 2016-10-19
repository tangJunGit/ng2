import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-pipe',
    template: `
        <h2>内置管道</h2>
        <p>生日时间: {{ birthday | date:"yyyy/MM/dd" }} </p>
        <h2>自定义管道</h2>
        <p>指数算法: {{2 | exponentialStrength: 10}}</p>
    `
})
export class PipeComponent implements OnInit {
    birthday = new Date(2016, 10, 1);

    constructor() { }

    ngOnInit() { }
}