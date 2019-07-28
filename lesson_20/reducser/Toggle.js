import * as Constant from "../actions";

export default function reduser(state, payload) {
    switch (payload.type) {
        case Constant.CHECK:
            return {check: checked ? 'true' : 'false'}
    }

    if(state){
        return state;
    }
    return {check: false}
       
}