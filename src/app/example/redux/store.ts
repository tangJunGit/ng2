import { Store, createStore, StoreEnhancer } from 'redux';

import { counterReducer } from './reducer';
import { AppState } from './state';

// Redux Devtools
// 下载地址：https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en
let devtools: StoreEnhancer<AppState> =
	window['devToolsExtension'] ?
	window['devToolsExtension']() : f => f;


export const store: Store<AppState> = createStore<AppState>(counterReducer, devtools);