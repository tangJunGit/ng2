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

    constructor(private _stompService: StompService) { }

    ngOnInit() {
        this.onconnect();
        
        //接受收据
        this._stompService.messages.subscribe((message: any)=>{
            this.messages = message;
        });

        //接受状态
        this._stompService.state.subscribe((state: string)=>{
            this.state = state;
        });
     }

     ngOnDestroy(){
         this._stompService.on_disconnect();
     }

     onconnect(imei?: string[]){
        this._stompService.on_connect(imei);
     }

     onsubscribe(){
         this._stompService.on_subscribe(this.imei);
     }
    onunsubscribe(){
        this._stompService.on_unsubscribe(this.imei);
    }

}