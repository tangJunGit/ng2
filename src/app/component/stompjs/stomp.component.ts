import { Component, OnInit, OnDestroy } from '@angular/core';

import { StompService } from './stomp.service';


@Component({
    selector: 'stomp-demo',
    template: `
        <h1>Stomp</h1>
        <button class="default" (click)="onsubscribe()">订阅</button>
        <button class="default" (click)="onunsubscribe()">取消订阅</button>
        <span>{{state}}</span>
        <pre>{{messages | json}}</pre>
    `
})
export class StompComponent implements OnInit, OnDestroy {
    state: string;
    messages: any;
    imei: string[] = ['864695020005882'];

    constructor(private stompService: StompService) { }

    ngOnInit() {
        this.onconnect();
        
        //接受收据
        this.stompService.messages.subscribe((message: any)=>{
            this.messages = message;
        });

        //接受状态
        this.stompService.state.subscribe((state: string)=>{
            this.state = state;
        });
     }

     ngOnDestroy(){
         this.stompService.on_disconnect();
     }

     onconnect(imei?: string[]){
        this.stompService.on_connect(imei);
     }

     onsubscribe(){
         this.stompService.on_subscribe(this.imei);
     }
    onunsubscribe(){
        this.stompService.on_unsubscribe(this.imei);
    }

}