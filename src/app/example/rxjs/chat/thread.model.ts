import { Message } from './message.model';

export class Thread{
    id: string;
    name: string;
    avastarSrc: string;
    lastMessage: Message;

    constructor(id: string, name: string, avastarSrc: string){
        //this.id = id || uuid();
        this.name = name;
        this.avastarSrc = avastarSrc;
    }
}