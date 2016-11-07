import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-pipe',
    template: `
        <h2>内置管道</h2>
        <p>生日时间: {{ birthday | date:"yyyy/MM/dd" }} </p>
        <h2>自定义管道</h2>
        <div>power: <input [(ngModel)]="power"></div>
        <div>factor: <input [(ngModel)]="factor"></div>
        <p>指数算法: {{power | exponentialStrength: factor}}</p>
    `
})
export class PipeComponent implements OnInit {
    birthday: Date = new Date(2016, 10, 1);

    power: number = 5;
    factor: number = 1;

    constructor() { }

    ngOnInit() { }
}