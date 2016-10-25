import { User } from './user.model';
import { Thread } from './thread.model';

export class Message{
    id: string;
    sentAt: string;
    isRead: boolean;
    text: string;
    thread: Thread;
    author: User;
}