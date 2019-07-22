import { createStore } from 'redux';
import * as Constant from "../actions";

export default function reduser(state, payload) {
    switch (payload.type) {
        case Constant.REMOVE:
            return state.filter(std => std.name !== payload.name);
        case Constant.ADD:
            return state.concat({ name: payload.name });
    }

    if(state){
        return state;
    }
    return [
        { name: 'John' },
        { name: 'Lina' },
        { name: 'Ira' },
        { name: 'Tom' },
    ];
}

export const Store = createStore(reduser);
Store.dispatch({ type: 'ADD', name: 'Grigor' });