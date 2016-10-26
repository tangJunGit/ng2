import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Config } from './stomp.model';

var SockJS = require('sockjs-client');
var Stomp = require('stompjs');

@Injectable()
export class StompService {
    config: Config;
    stompClient: any;

    //接受数据
    messages: Subject<any> = new Subject<any>();
    
    //webscoket状态
    state: Subject<string> = new Subject<string>();

    constructor() { }
    /**
     * 连接webscoket
     * 
     * @param {Config} config    配置参数
     * @param {string[]} [imei]    订阅的imei数组
     * 
     * @memberOf StompService
     */
    on_connect(config: Config,imei?: string[]) {
        this.configure(config);

        let socket = new SockJS(`${this.config.ws}://${config.host}:${config.port}/${config.publish}`);

        this.stompClient = Stomp.over(socket, undefined, {protocols_whitelist: ['websocket']});
        this.stompClient.connect(config.headers, (frame: any) => {
            this.state.next('CONNECTED');
            if(imei && imei.length) this.on_subscribe(imei);
        }, this.on_error.bind(this));

    }
    /**
     * 配置
     * 
     * @param {Config} config   配置参数
     * 
     * @memberOf StompService
     */
    configure(config: Config){
         if (config === null)
            throw Error("No configuration provided!");
        
        if(config) this.config = config;
        
        this.config.ws = !config.ssl ? 'http' : 'https';
        
    }
    /**
     * 断开webscoket
     * 
     * 
     * @memberOf StompService
     */
    on_disconnect(){
        this.stompClient.disconnect(() => {
            this.state.next('CLOSED');
        });
    }
    /**
     * 订阅
     * 
     * @param {string[]} imei  订阅的imei数组
     * 
     * @memberOf StompService
     */
    on_subscribe(imei: string[]){
        for(let i of imei){
            this.stompClient.subscribe(`${this.config.subscribe}/${imei}`, this.on_message.bind(this), {id: imei});
        }
        this.state.next('SUBSCRIBED');
    }
    /**
     * 取消订阅
     * 
     * @param {string[]} imei   订阅的imei数组
     * 
     * @memberOf StompService
     */
    on_unsubscribe(imei: string[]){
        for(let i of imei){
            this.stompClient.unsubscribe(`${this.config.subscribe}/${imei}`);
        }
    }
    /**
     * 接受数据
     * 
     * @param {*} message   接受的数据
     * 
     * @memberOf StompService
     */
    private on_message(message: any){
        if(message.body){
            this.messages.next(JSON.parse(message.body));
        }else{
            console.error("Empty message received!");
        }
    }
    /**
     * 错误处理
     * 
     * @param {*} error    
     * 
     * @memberOf StompService
     */
    private on_error(error: any){
         this.state.next('ERROR');
    }

}