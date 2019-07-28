import  {GET, ADD, REMOVE, SET} from '../actions';

export default (store) => (next) => (payload) => {
    
        let data = JSON.parse(localStorage.getItem('students'));
        if(data instanceof Array){
        for (let i = 0; i < data.length; i++ ) {
            if (payload.name === data[i].name || payload.name === "") {
                return next({ type: REMOVE, name: payload.name })
          }else {
            return next(payload);
            }
       }

    }
    

}