import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs/RX'; 

import { MessageService } from './message.service';
import { Message } from './message.model';
import { Thread } from './thread.model';

var _ = require('underscore');

@Injectable()
export class ThreadService {
    threads: Observable<{[Key: string]: Thread}>;

    orderedThreads: Observable<Thread[]>;

    currentThread: Subject<Thread> = new BehaviorSubject<Thread>(null);

    currentThreadMessages: Observable<Message[]>;

    constructor(private messageService: MessageService) { 
        //重新组建 threads
        this.threads = this.messageService.messages.map((messages: Message[]) => {
            let threads: {[Key: string]: Thread} = {};
            messages.map((message: Message) => {
                threads[message.thread.id] = threads[message.thread.id] || message.thread;

                let messagesThread: Thread = threads[message.thread.id];

                if (!messagesThread.lastMessage || messagesThread.lastMessage.sentAt < message.sentAt) {
                    messagesThread.lastMessage = message;
                }
            });

            return threads;
        });

        // order
        this.orderedThreads = this.threads.map((threadGroups: { [key: string]: Thread }) => {
                     let threads: Thread[] = _.values(threadGroups);
                     return _.sortBy(threads, (t: Thread) => t.lastMessage.sentAt).reverse();
                 });

        //
        this.currentThreadMessages = this.currentThread.combineLatest(
            messageService.messages, (currentThread: Thread, messages: Message[]) => {
                 if (currentThread && messages.length > 0) { 
                     return _.chain(messages).filter((message: Message) =>
                         (message.thread.id === currentThread.id)).map((message: Message) => {
                             message.isRead = true;
                             return message; 
                        })
                        .value();
                    } else {
                        return [];
                    }
             });

        this.currentThread.subscribe(this.messageService.markThreadAsRead);

    }

    setCurrentThread(newThread: Thread): void {
        this.currentThread.next(newThread);
    }
}

export var threadsServiceInjectables: Array<any> = [ThreadService];