import { Component, OnInit } from '@angular/core';

//父组件调用 ViewChild
import { AfterViewInit, ViewChild } from '@angular/core';  
import { CountdownTimerComponent } from './timer.component';

@Component({
    selector: 'my-communication',
    template: `
        <h1>父组件与子组件通过 本地变量 互动</h1>
        <button (click)="timer.start()">Start</button>
        <button (click)="timer.stop()">Stop</button>
        <div class="seconds">{{timer.seconds}}</div>

        <hr />

        <h1>父组件调用 ViewChild</h1>
        <button (click)="start()">Start</button>
        <button (click)="stop()">Stop</button>
        <div class="seconds">{{ seconds() }}</div>

        <hr />

        <h1>子组件：</h1>
        <countdown-timer #timer></countdown-timer>  

        <hr />

        <h1>父组件和子组件通过服务来通讯</h1>
        <button [routerLink]="['../service1-communication']">demo</button>
        
    `
})
export class CommunicationComponent implements OnInit, AfterViewInit {
    constructor() { }

    ngOnInit() { }

    //父组件调用 ViewChild
    @ViewChild(CountdownTimerComponent) timerComponent:CountdownTimerComponent;
    
    ngAfterViewInit(){
        this.seconds = () => this.timerComponent.seconds;  //覆盖方法seconds();
    }

    seconds(): number{ return 10; }

    start() { this.timerComponent.start(); }
    stop() { this.timerComponent.stop(); }
}