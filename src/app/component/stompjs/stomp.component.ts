import { Component, OnInit, OnDestroy } from '@angular/core';

var SockJS = require('sockjs-client');
var Stomp = require('stompjs');

@Component({
    selector: 'stomp-demo',
    template: `
        <h1>Stomp</h1>
        <pre>{{message | json}}</pre>
        <button class="default" (click)="onconnect()">重新连接</button>
        <button class="default" (click)="ondisconnect()">断开连接</button>
        <button class="default" (click)="onunsubscribe()">取消订阅</button>
        <button class="default" (click)="send()">发送消息</button>
    `
})
export class StompComponent implements OnInit, OnDestroy {
    stompClient: any;
    message: any;

    constructor() { }

    ngOnInit() {
        this.onconnect();
     }

     ngOnDestroy(){
         this.ondisconnect();
     }
    //发送消息
    send() {
        var quote = {name: 'APPLE', value: 195.46};
        this.stompClient.send('/topic/terminals', {}, JSON.stringify(quote));
    }
    
    onconnect() {
        var that = this;
        // 添加头信息
        var headers = {
            login: 'mylogin',
            passcode: 'mypasscode',
            'client-id': 'my-client-id'
        };
        //创建
        var socket = new SockJS('http://103.245.129.20:8088/terminals');
        this.stompClient = Stomp.over(socket, undefined, {protocols_whitelist: ['websocket']});
        //连接
        this.stompClient.connect(headers, function (frame:any) {
            alert('连接成功!');
            //订阅
            that.stompClient.subscribe('/topic/terminals', function (greeting:any) {
                //接收
                that.message = greeting;
            });
        }, function (err:any) {
            console.log('err', err);
        });
    }
    //断开连接
    ondisconnect(){
        this.stompClient.disconnect(function() {
            alert("断开连接!");
        });
    }
    //取消订阅
    onunsubscribe(){
        this.stompClient.unsubscribe('/topic/terminals');
    }

}