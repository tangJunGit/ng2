import { Injectable } from '@angular/core';

import { Subject, Observable } from 'rxjs/RX'; 
import { User } from './user.model';
import { Message } from './message.model';
import { Thread } from './thread.model';


let initialMessages: Message[] = [];

interface IMessageOperation extends Function{
    (messages: Message[]): Message[];
}

@Injectable()
export class MessageService {
    newMessage: Subject<Message> = new Subject<Message>();
    messages: Observable<Message[]>;

    // 定义 updates流
    updates: Subject<any> = new Subject<any>();

    // action streams
    create: Subject<Message> = new Subject<Message>();
    markThreadAsRead: Subject<any> = new Subject<any>();


    constructor() {
        // ------  Operation Stream  -------- 
        // updates receive operations
        // scan 类似 reduce
        this.messages = this.updates.scan(
            (messages: Message[], operation: IMessageOperation) => {
                return operation(messages);
            },
            initialMessages
        )
        // --------  Sharing the Stream  ----------------
        .publishReplay(1)
        .refCount();

        // ----------- create operations   -------------------
        // it runs the function once for each item in the stream and emits the return value of the function.
        this.create.map(function(message: Message): IMessageOperation {
                return (messages: Message[]) => {
                    return messages.concat(message);
                };
            })
            .subscribe(this.updates);

        // -----------  connect this stream   -----------
        this.newMessage.subscribe(this.create);

        this.markThreadAsRead.map((thread: Thread) => {
            return (messages: Message[]) => {
                return messages.map((message: Message) => {
                    if(message.thread.id === thread.id){
                        message.isRead = true;
                    }
                    return message;
                })
            }
        })
        .subscribe(this.updates);
     }
    /**
     * 新增 message
     * 
     * @param {Message} message
     * 
     * @memberOf MessageService
     */
    addMessage(message: Message): void{
        this.newMessage.next(message);
    }


    /**
     *  过滤filter，属于 thread，不属于 user
     * 
     * @param {Thread} thread    
     * @param {User} user    
     * @returns {Observable<Message>}
     * 
     * @memberOf MessageService
     */
    messagesForThreadUser(thread: Thread, user: User): Observable<Message>{
        return this.newMessage.filter(
            (message: Message) => {
                return (message.thread.id === thread.id) && (message.author.id !== user.id);
            }
        );
    }


}

export var messagesServiceInjectables: Array<any> = [MessageService];