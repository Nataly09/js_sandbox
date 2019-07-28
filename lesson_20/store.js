import { createStore, combineReducers, applyMiddleware } from 'redux';
import studentsReducer from './reducser/students'; 
import counterReducer from './reducser/counter';
import toggleReducer from './reducser/Toggle';
import loggerMiddlware from './middlewares/logger';
import countUpdaterMiddlware  from './middlewares/count_updater';
import storageMiddlware  from './middlewares/storage';
import deduplicator from './middlewares/deduplicator';


export const Store = createStore(combineReducers({
    students: studentsReducer,
    counter: counterReducer,
    enabled: toggleReducer,
}),
applyMiddleware(loggerMiddlware, countUpdaterMiddlware, storageMiddlware, deduplicator));

