import { Component, OnInit, OpaqueToken, Inject } from '@angular/core';
import { Action, Reducer, Store, createStore } from 'redux';

import * as CounterActions from './action';
import { AppState } from './state';
import { store } from './store';

const AppStore = new OpaqueToken('App.store');

@Component({
    selector: 'my-redux',
    template: `
        <div class="row">
            <div class="col-sm-6 col-md-4">
                <div class="thumbnail">
                    <div class="caption">
                        <h3>Counter</h3>
                        <p>Custom Store</p>
                        <p>
                            The counter value is: <b>{{ counter }}</b>
                        </p>
                        <p>
                            <button (click)="increment()" class="btn btn-primary"> Increment </button>
                            <button (click)="decrement()" class="btn btn-default"> Decrement </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `,
    // providers: [
    //     {provide: AppStore, useValue: store}
    // ]
})
export class ReduxComponent implements OnInit {
    counter: number;

    constructor(
        // @Inject(AppStore) private store: Store<AppState>
        ) { 
        // 监听store的变化
        // store.subscribe(() => this.readState());
        // this.readState();
    }

    ngOnInit() {
        
     }

    readState() {
        // let state: AppState = this.store.getState() as AppState;
        // this.counter = state.counter;
    }

    increment() {
        // this.store.dispatch(CounterActions.increment());
    }

    decrement() {
        // this.store.dispatch(CounterActions.decrement());
    }
}
