import { Component, OnInit } from '@angular/core';
import { Action, Reducer, Store, createStore } from 'redux';

interface AppState {
    messages: string[];
}

interface AddMessageAction extends Action {
    message: string;
}

interface DeleteMessageAction extends Action {
    index: number;
}

@Component({
    selector: 'my-redux',
    template: `
        
    `
})
export class ReduxComponent implements OnInit {
    constructor() { }

    ngOnInit() {
        let initialState: AppState = { messages: [] };

        let reducer: Reducer<AppState> = (state: AppState = initialState, action: Action ) => {
            switch (action.type){
                case 'ADD_MESSAGE': 
                    return {
                        messages: state.messages.concat(
                            (<AddMessageAction>action).message
                        )
                    };
                case 'DELECT_MESSAGE':
                    let idx = (<DeleteMessageAction>action).index;
                    return {
                        messages: [
                            ...state.messages.slice(0, idx),
                            ...state.messages.slice(idx + 1, state.messages.length)
                        ]
                    };
            }
        }
        
        let store: Store<AppState> = createStore<AppState>(reducer);
        console.log(store.getState());

        store.dispatch(
            MessageActions.addMessage('Would you say the fringe was made of silk?')
        );
        store.dispatch(
            MessageActions.addMessage('Wouldnt have no other kind but silk?')
        );
        store.dispatch(
            MessageActions.addMessage('Has it really got a team of snow white horses?')
        );
        console.log(store.getState());


     }
}

class MessageActions {
    static addMessage(message: string): AddMessageAction{
        return {
            type: 'ADD_MESSAGE',
            message: message
        }
    }
    static deleteMessage(index: number): DeleteMessageAction{
        return {
            type: 'DELECT_MESSAGE',
            index: index
        }
    }
}