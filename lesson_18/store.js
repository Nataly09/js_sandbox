import { createStore, combineReducers } from 'redux';
import studentsReducer from './reducser/students'; 
import counterReducer from './reducser/counter';
import toggleReducer from './reducser/Toggle';


export const Store = createStore(combineReducers({
    students: studentsReducer,
    counter: counterReducer,
    // enabled: toggleReducer,
}));

console.log(Store.getState())