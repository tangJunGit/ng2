import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { ConfigService } from './config.service';
var SockJS = require('sockjs-client');
var Stomp = require('stompjs');
export var StompService = (function () {
    function StompService(configService) {
        this.configService = configService;
        //接受数据
        this.messages = new Subject();
        //webscoket状态
        this.state = new Subject();
    }
    /**
     * 连接webscoket
     *
     * @param {Config} config    配置参数
     * @param {string[]} [imei]    订阅的imei数组
     *
     * @memberOf StompService
     */
    StompService.prototype.on_connect = function (imei) {
        var _this = this;
        this.configService.getConfig().subscribe(function (config) {
            _this.config = config;
            _this.creat(imei);
        });
    };
    /**
     * 创建 socket
     *
     * @param {string[]} [imei]    订阅的imei数组
     *
     * @memberOf StompService
     */
    StompService.prototype.creat = function (imei) {
        var _this = this;
        var socket = new SockJS(this.config.ws + "://" + this.config.host + ":" + this.config.port + this.config.publish);
        this.stompClient = Stomp.over(socket, undefined, { protocols_whitelist: ['websocket'] });
        this.stompClient.connect(this.config.headers, function (frame) {
            _this.state.next('CONNECTED');
            if (imei && imei.length)
                _this.on_subscribe(imei);
        }, this.on_error.bind(this));
    };
    /**
     * 断开webscoket
     *
     *
     * @memberOf StompService
     */
    StompService.prototype.on_disconnect = function () {
        var _this = this;
        this.stompClient.disconnect(function () {
            _this.state.next('CLOSED');
        });
    };
    /**
     * 订阅
     *
     * @param {string[]} imei  订阅的imei数组
     *
     * @memberOf StompService
     */
    StompService.prototype.on_subscribe = function (imei) {
        for (var _i = 0, imei_1 = imei; _i < imei_1.length; _i++) {
            var i = imei_1[_i];
            this.stompClient.subscribe(this.config.subscribe + "/" + imei, this.on_message.bind(this), { id: imei });
        }
        this.state.next('SUBSCRIBED');
    };
    /**
     * 取消订阅
     *
     * @param {string[]} imei   订阅的imei数组
     *
     * @memberOf StompService
     */
    StompService.prototype.on_unsubscribe = function (imei) {
        for (var _i = 0, imei_2 = imei; _i < imei_2.length; _i++) {
            var i = imei_2[_i];
            this.stompClient.unsubscribe(this.config.subscribe + "/" + imei);
        }
        this.state.next('UNSUBSCRIBED');
    };
    /**
     * 接受数据
     *
     * @param {*} message   接受的数据
     *
     * @memberOf StompService
     */
    StompService.prototype.on_message = function (message) {
        if (message.body) {
            this.messages.next(JSON.parse(message.body));
        }
        else {
            console.error("Empty message received!");
        }
    };
    /**
     * 错误处理
     *
     * @param {*} error
     *
     * @memberOf StompService
     */
    StompService.prototype.on_error = function (error) {
        this.state.next('ERROR');
    };
    StompService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    StompService.ctorParameters = [
        { type: ConfigService, },
    ];
    return StompService;
}());
//# sourceMappingURL=stomp.service.js.map