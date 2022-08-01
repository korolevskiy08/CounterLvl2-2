import {combineReducers, createStore, legacy_createStore} from 'redux';
import {settingsReducer} from "./settingsReducer";
import {counterEditReducer} from "./counterEditReducer";
const rootReducer = combineReducers({
    settingsReducer: settingsReducer,
    counterEditReducer
})
// непосредственно создаём store
export const store = legacy_createStore(rootReducer);
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;