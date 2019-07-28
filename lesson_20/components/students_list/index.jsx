import React from 'react';
import { connect} from 'react-redux';
import * as Constant from '../../actions';

class List extends React.Component {
    constructor(props){
        super(props);

    
    }

    componentDidMount(){
        this.props.getList()
    }
     
    
    render(){
        const props = this.props;
      let newName = ''; 
       return (
           <div>
               {props.count}
               <button onClick = {(event) => props.countadd(props.countadd)}>Increment</button>
               {props.list.map(student => (
                   <div key={student.name} onClick = {props.remove.bind(null, student.name)}>
                       {student.name}
                   </div>
               ))}
               
              
               <input type= 'text'  onChange = {(event) => newName = event.target.value}></input>
                   <button onClick = {() => props.add(newName)}> Add student</button>
   
                   <div><input type='checkbox' defaultChecked = {() => props.check(props.check)}></input></div>
           
           </div>
       )
       }
   }
   
   
   
   export default connect(
       (state) => ({
            list: state.students,
           count: state.counter.count,
           check: state.enabled,
           }),
       (dispatch) => ({
           remove: (name) => dispatch({type: Constant.REMOVE, name}),
           add: (name) => dispatch({type: Constant.ADD, name}),
           countadd: () => dispatch({type: Constant.COUNTER_INCREMENT}),
           check: () => dispatch({type: Constant.CHECK}),
           countdec: () => dispatch({type: Constant.COUNTER_DEC}),
           getList: () => dispatch({type: Constant.GET}),
        })
   )(List);