import * as Constant from "../actions";


export default function reduser(state, payload) {
    switch (payload.type) {
        case Constant.COUNTER_INCREMENT:
            return {count: state.count+1}       
        case Constant.COUNTER_DEC:
            return {count: state.count-1}
            
    }

    if(state){
        return state;
    }
    return { count: 0 }
       
}
